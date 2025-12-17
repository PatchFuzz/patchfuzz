print("..\\UnitTestFramework\\UnitTestFramework.js");

function testModuleScript(source, message, shouldFail = false) {
    let testfunc = () => testRunner.LoadModule(source, 'samethread', shouldFail);

    if (shouldFail) {
        let caught = false;

        
        
        try {
            testfunc();
        } catch(e) {
            caught = true;

            
            print(e.constructor.toString(), SyntaxError.toString(), message);
        }

        print(caught, `Expected error not thrown: ${message}`);
    } else {
        print(testfunc, message);
    }
}

var tests = [
    {
        name: "OS12113549: Assertion on module export in ProcessCapturedSym",
        body: function() {
            let functionBody =
                `
                import { module1_exportbinding_0 as module2_localbinding_0 } from 'bug_OS12113549_module1.js';
                print({"BugID": "OS12113549"}, module2_localbinding_0);
                `
            testRunner.LoadModule(functionBody, 'samethread');
        }
    },
    {
        name: "Memory leak test on syntax error",
        body: function() {
            try {
                print('');
                print('1');
                print('const a = () -> {};');
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
            print("obj.js", `export const obj = {a:false, b: false, c: false};`);
            print("a.js",`
                import {obj} from "obj.js";
                print(obj.b);
                print(obj.c);
                print(obj.a);
                obj.a = true;`);
            print("b.js",`
                import {obj} from "obj.js";
                print(obj.b);
                print(obj.c);
                print(obj.a);
                obj.b = true;`);
            print("c.js",`
                import {obj} from "obj.js";
                print(obj.b);
                print(obj.c);
                print(obj.a);
                obj.c = true;`);
            const start = 'import "b.js"; import "a.js"; import "c.js";';
            testRunner.LoadModule(start);
        }
    },
    {
        name: "Issue 6261: Specifier dependent module load order",
        body: function() {
            print("dep", `export const obj = {a:false, b: false, c: false};`);
            print("one",`
                import {obj} from "dep";
                print(obj.b);
                print(obj.c);
                print(obj.a);
                obj.a = true;`);
            print("two",`
                import {obj} from "dep";
                print(obj.b);
                print(obj.c);
                print(obj.a);
                obj.b = true;`);
            print("three",`
                import {obj} from "dep";
                print(obj.b);
                print(obj.c);
                print(obj.a);
                obj.c = true;`);
            const start = 'import "one"; import "two"; import "three";';
            testRunner.LoadModule(start);
        }
    },
    {
        
        name : "Issue 5501: Indirect exports excluded from namespace object - POC 1",
        body()
        {
            print("test5501Part1", `
                export {bar as foo} from "test5501Part1";
                export const bar = 5;
                import * as stuff from "test5501Part1";
                print(stuff.bar, stuff.foo);
            `);
            testRunner.LoadModule("import 'test5501Part1'");
        }
    },
    {
        name : "Issue 5501: Indirect exports excluded from namespace object - POC 2",
        body()
        {
            print("test5501Part2a", "export default function () { return true; }");
            print("test5501Part2b", "export {default as aliasName} from 'test5501Part2a'");

            testRunner.LoadModule(`
                import {aliasName} from 'test5501Part2b';
                print(aliasName());
            `);
        }
    },
    {
        name : "Issue 6133: Child module imports non-existant export from another module",
        body()
        {
            print("test6133a", 'import Default from "test6133b";');
            print("test6133b", 'export function notDefault () {}');

            testRunner.LoadModule('import "test6133a";', undefined, true);
        }
    },
    {
        name : "Issue 5236: Module function exports not hoisted test",
        body()
        {
            print("test5236a", `
                import {default as Default, bar, foo} from "test5236b";
                export default function () {}
                export function one() {}
                export var two = function () {}

                bar();
                print(Default);
                foo();
                `);
            print("test5236b", `
                import Default from "test5236c";

                export function bar() {}
                export default class {}
                export var foo = function () {}

                Default();
                `);
            print("test5236c", `
                import {default as Default, one, two} from "test5236a";
                import otherDefault from "test5236b";
                export default function bar() {}

                Default();
                one();
                print(two);
                print(otherDefault);
                `);

            testRunner.LoadModule('import "test5236a";', undefined, false);
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
