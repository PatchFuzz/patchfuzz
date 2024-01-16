






WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

function testModuleScript(source, message, shouldFail = false) {
    let testfunc = () => testRunner.LoadModule(source, 'samethread', shouldFail);

    if (shouldFail) {
        let caught = false;

        
        
        try {
            testfunc();
        } catch(e) {
            caught = true;

            
            assert.areEqual(e.constructor.toString(), SyntaxError.toString(), message);
        }

        assert.isTrue(caught, `Expected error not thrown: ${message}`);
    } else {
        assert.doesNotThrow(testfunc, message);
    }
}

var tests = [
    {
        name: "OS12113549: Assertion on module export in ProcessCapturedSym",
        body: function() {
            let functionBody =
                `
                import { module1_exportbinding_0 as module2_localbinding_0 } from 'bug_OS12113549_module1.js';
                assert.areEqual({"BugID": "OS12113549"}, module2_localbinding_0);
                `
            testRunner.LoadModule(functionBody, 'samethread');
        }
    },
    {
        name: "Memory leak test on syntax error",
        body: function() {
            try {
                WScript.LoadModule('');
                WScript.LoadModule('1');
                WScript.LoadModule('const a = () -> {};');
            } catch(e) {
                
            }
        }
    },
    {
        name: "Issue 4482: Indirect circular module dependencies",
        body: function() {
            let functionBody = "import 'module_4482_dep1.js';"
            testRunner.LoadModule(functionBody);
        }
    },
    {
        name: "Issue 4570: Module that appears multiple times in dependency tree",
        body: function() {
            let functionBody = "import 'module_4570_dep1.js';"
            testRunner.LoadModule(functionBody);
        }
    },
    {
        name: "Issue 5171: Incorrect module load order",
        body: function() {
            WScript.RegisterModuleSource("obj.js", `export const obj = {a:false, b: false, c: false};`);
            WScript.RegisterModuleSource("a.js",`
                import {obj} from "obj.js";
                assert.isTrue(obj.b);
                assert.isFalse(obj.c);
                assert.isFalse(obj.a);
                obj.a = true;`);
            WScript.RegisterModuleSource("b.js",`
                import {obj} from "obj.js";
                assert.isFalse(obj.b);
                assert.isFalse(obj.c);
                assert.isFalse(obj.a);
                obj.b = true;`);
            WScript.RegisterModuleSource("c.js",`
                import {obj} from "obj.js";
                assert.isTrue(obj.b);
                assert.isFalse(obj.c);
                assert.isTrue(obj.a);
                obj.c = true;`);
            const start = 'import "b.js"; import "a.js"; import "c.js";';
            testRunner.LoadModule(start);
        }
    },
    {
        name: "Issue 6261: Specifier dependent module load order",
        body: function() {
            WScript.RegisterModuleSource("dep", `export const obj = {a:false, b: false, c: false};`);
            WScript.RegisterModuleSource("one",`
                import {obj} from "dep";
                assert.isFalse(obj.b);
                assert.isFalse(obj.c);
                assert.isFalse(obj.a);
                obj.a = true;`);
            WScript.RegisterModuleSource("two",`
                import {obj} from "dep";
                assert.isFalse(obj.b);
                assert.isFalse(obj.c);
                assert.isTrue(obj.a);
                obj.b = true;`);
            WScript.RegisterModuleSource("three",`
                import {obj} from "dep";
                assert.isTrue(obj.b);
                assert.isFalse(obj.c);
                assert.isTrue(obj.a);
                obj.c = true;`);
            const start = 'import "one"; import "two"; import "three";';
            testRunner.LoadModule(start);
        }
    },
    {
        
        name : "Issue 5501: Indirect exports excluded from namespace object - POC 1",
        body()
        {
            WScript.RegisterModuleSource("test5501Part1", `
                export {bar as foo} from "test5501Part1";
                export const bar = 5;
                import * as stuff from "test5501Part1";
                assert.areEqual(stuff.bar, stuff.foo);
            `);
            testRunner.LoadModule("import 'test5501Part1'");
        }
    },
    {
        name : "Issue 5501: Indirect exports excluded from namespace object - POC 2",
        body()
        {
            WScript.RegisterModuleSource("test5501Part2a", "export default function () { return true; }");
            WScript.RegisterModuleSource("test5501Part2b", "export {default as aliasName} from 'test5501Part2a'");

            testRunner.LoadModule(`
                import {aliasName} from 'test5501Part2b';
                assert.isTrue(aliasName());
            `);
        }
    },
    {
        name : "Issue 6133: Child module imports non-existant export from another module",
        body()
        {
            WScript.RegisterModuleSource("test6133a", 'import Default from "test6133b";');
            WScript.RegisterModuleSource("test6133b", 'export function notDefault () {}');

            testRunner.LoadModule('import "test6133a";', undefined, true);
        }
    },
    {
        name : "Issue 5236: Module function exports not hoisted test",
        body()
        {
            WScript.RegisterModuleSource("test5236a", `
                import {default as Default, bar, foo} from "test5236b";
                export default function () {}
                export function one() {}
                export var two = function () {}

                bar();
                assert.isNotUndefined(Default);
                foo();
                `);
            WScript.RegisterModuleSource("test5236b", `
                import Default from "test5236c";

                export function bar() {}
                export default class {}
                export var foo = function () {}

                Default();
                `);
            WScript.RegisterModuleSource("test5236c", `
                import {default as Default, one, two} from "test5236a";
                import otherDefault from "test5236b";
                export default function bar() {}

                Default();
                one();
                assert.isUndefined(two);
                assert.isUndefined(otherDefault);
                `);

            testRunner.LoadModule('import "test5236a";', undefined, false);
        }
    }
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
