print("..\\UnitTestFramework\\UnitTestFramework.js");

function testModuleScript(source, message, shouldFail = false) {
    let testfunc = () => testRunner.LoadModule(source, undefined, shouldFail);

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
        name: "Issue3249: Namespace object's property attributes",
        body: function () {
            testModuleScript(`
            function verifyPropertyDesc(obj, prop, desc, propName) {
                var actualDesc = Object.getOwnPropertyDescriptor(obj, prop);
                if (typeof propName === "undefined") { propName = prop; }
                print(desc.configurable, actualDesc.configurable, propName+"'s attribute: configurable");
                print(desc.enumerable, actualDesc.enumerable, propName+"'s attribute: enumerable");
                print(desc.writable, actualDesc.writable, propName+"'s attribute: writable");
            }

            import * as foo from "ValidExportStatements.js";
            print("Module", foo[Symbol.toStringTag], "@@toStringTag is the String value'Module'");
            verifyPropertyDesc(foo, Symbol.toStringTag, {configurable:false, enumerable: false, writable: false}, "Symbol.toStringTag");
            verifyPropertyDesc(foo, "default", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "var7", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "var6", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "var4", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "var3", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "var2", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "var1", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "foo4", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "bar2", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "foobar", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "foo3", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "baz2", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "foo2", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "baz", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "bar", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "foo", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "const6", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "const5", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "const4", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "const3", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "const2", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "let7", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "let6", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "let5", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "let4", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "let2", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "let1", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "cl2", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "cl1", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "gn2", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "gn1", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "fn2", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo, "fn1", {configurable:false, enumerable: true, writable: true});

            import * as foo1 from "ValidReExportStatements.js";
            verifyPropertyDesc(foo1, "foo", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo1, "bar", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo1, "baz", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo1, "foo2", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo1, "bar2", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo1, "foo3", {configurable:false, enumerable: true, writable: true});

            import * as foo2 from "ModuleComplexReexports.js";
            verifyPropertyDesc(foo2, "ModuleComplexReexports_foo", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo2, "bar2", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo2, "localfoo2", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo2, "bar", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo2, "localfoo", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo2, "baz", {configurable:false, enumerable: true, writable: true});
            verifyPropertyDesc(foo2, "foo", {configurable:false, enumerable: true, writable: true});
            `, '', false);
        }
    },
    {
        name: "Basic import namespace",
        body: function () {
            testModuleScript(`
            import * as foo from "ValidExportStatements.js";
            print("default", foo.default, "default");
            print(undefined, foo.var7, "var7");
            print(undefined, foo.var6, "var6");
            print(undefined, foo.var5, "var5");
            print(undefined, foo.var4, "var4");
            print(5, foo.var3, "var3");
            print(undefined, foo.var2, "var2");
            print("string", foo.var1, "var1");
            print("function foo() { }", foo.foo4.toString(), "foo4");
            print("class bar { }", foo.bar2.toString(), "bar2");
            print("function foobar() { }", foo.foobar.toString(), "foobar");
            print("function foo() { }", foo.foo3.toString(), "foo3");
            print("function* baz() { }", foo.baz2.toString(), "baz2");
            print("function foo() { }", foo.foo2.toString(), "foo2");
            print("function* baz() { }", foo.baz.toString(), "baz");
            print("class bar { }", foo.bar.toString(), "bar");
            print("function foo() { }", foo.foo.toString(), "foo");
            print([], foo.const6, "const6");
            print({}, foo.const5, "const5");
            print(4, foo.const4, "const4");
            print(3, foo.const3, "const3");
            print("str", foo.const2, "const2");
            print([], foo.let7, "let7");
            print({}, foo.let6, "let6");
            print(undefined, foo.let5, "let5");
            print(undefined, foo.let4, "let4");
            print(undefined, foo.let3, "let3");
            print(2, foo.let2, "let2");
            print(undefined, foo.let1, "let1");
            print("class cl2 { }", foo.cl2.toString(), "cl2");
            print("class cl1 { }", foo.cl1.toString(), "cl1");
            print("function* gn2 () { }", foo.gn2.toString(), "gn2");
            print("function* gn1 () { }", foo.gn1.toString(), "gn1");
            print("function fn2 () { }", foo.fn2.toString(), "fn2");
            print("function fn1 () { }", foo.fn1.toString(), "fn1");
            `, '', false);
        }
    },
    {
        name: "import namespace with verification",
        body: function () {
            testModuleScript(`
            import * as foo from "moduleExport1.js";
            print("default", foo.default, "default");
            print(undefined, foo.var7, "var7");
            print(undefined, foo.var6, "var6");
            print(undefined, foo.var5, "var5");
            print(undefined, foo.var4, "var4");
            print(5, foo.var3, "var3");
            print(undefined, foo.var2, "var2");
            print("string", foo.var1, "var1");
            print("function foo() { }", foo.foo4.toString(), "foo4");
            print("class bar { }", foo.bar2.toString(), "bar2");
            print("function foobar() { }", foo.foobar.toString(), "foobar");
            print("function foo() { }", foo.foo3.toString(), "foo3");
            print("function* baz() { }", foo.baz2.toString(), "baz2");
            print("function foo() { }", foo.foo2.toString(), "foo2");
            print("function* baz() { }", foo.baz.toString(), "baz");
            print("class bar { }", foo.bar.toString(), "bar");
            print("function foo() { }", foo.foo.toString(), "foo");
            print([], foo.const6, "const6");
            print({}, foo.const5, "const5");
            print(4, foo.const4, "const4");
            print(3, foo.const3, "const3");
            print("str", foo.const2, "const2");
            print([], foo.let7, "let7");
            print({}, foo.let6, "let6");
            print(undefined, foo.let5, "let5");
            print(undefined, foo.let4, "let4");
            print(undefined, foo.let3, "let3");
            print(2, foo.let2, "let2");
            print(undefined, foo.let1, "let1");
            print("class cl2 { }", foo.cl2.toString(), "cl2");
            print("class cl1 { }", foo.cl1.toString(), "cl1");
            print("function* gn2 () { }", foo.gn2.toString(), "gn2");
            print("function* gn1 () { }", foo.gn1.toString(), "gn1");
            print("function fn2 () { }", foo.fn2.toString(), "fn2");
            print("function fn1 () { }", foo.fn1.toString(), "fn1");
            foo.verifyNamespace(foo);
            foo.changeContext();
            foo.verifyNamespace(foo);
            `, '', false);
        }
    },
    {
        name: "reexport only",
        body: function () {
            testModuleScript(`
            import * as foo from "ValidReExportStatements.js";
            print("function foo() { }", foo.foo.toString(), "foo");
            print("class bar { }", foo.bar.toString(), "bar");
            print("function* baz() { }", foo.baz.toString(), "baz");
            print("function foo() { }", foo.foo2.toString(), "foo2");
            print("class bar { }", foo.bar2.toString(), "bar2");
            print("function foo() { }", foo.foo3.toString(), "foo3");
            `, '', false);
        }
    },
    {
        name: "complex reexport",
        body: function () {
            testModuleScript(`import * as fooComplex from "ModuleComplexReexports.js";
            print("function bar() { return 'bar'; }", fooComplex.ModuleComplexReexports_foo.toString(), "ModuleComplexReexports_foo");
            print(undefined, fooComplex.switch, "switch");
            print("function foo() { return 'foo'; }", fooComplex.bar2.toString(), "bar2");
            print("function foo() { return 'foo'; }", fooComplex.localfoo2.toString(), "localfoo2");
            print("function foo() { return 'foo'; }", fooComplex.bar.toString(), "bar");
            print("function foo() { return 'foo'; }", fooComplex.localfoo.toString(), "localfoo");
            print("function foo() { return 'foo'; }", fooComplex.baz.toString(), "baz");
            print("function foo() { return 'foo'; }", fooComplex.foo.toString(), "foo");
            `, '', false);
        }
    },
    {
        name: "namespace as prototype",
        body: function () {
            testModuleScript(`import * as foo from "ValidExportStatements.js";
            var childObj = Object.create(foo);
            print("default", childObj.default, "default");
            print(undefined, childObj.var7, "var7");
            print(undefined, childObj.var6, "var6");
            print(undefined, childObj.var5, "var5");
            print(undefined, childObj.var4, "var4");
            print(5, childObj.var3, "var3");
            print(undefined, childObj.var2, "var2");
            print("string", childObj.var1, "var1");
            print("function foo() { }", childObj.foo4.toString(), "foo4");
            print("class bar { }", childObj.bar2.toString(), "bar2");
            print("function foobar() { }", childObj.foobar.toString(), "foobar");
            print("function foo() { }", childObj.foo3.toString(), "foo3");
            print("function* baz() { }", childObj.baz2.toString(), "baz2");
            print("function foo() { }", childObj.foo2.toString(), "foo2");
            print("function* baz() { }", childObj.baz.toString(), "baz");
            print("class bar { }", childObj.bar.toString(), "bar");
            print("function foo() { }", childObj.foo.toString(), "foo");
            print([], childObj.const6, "const6");
            print({}, childObj.const5, "const5");
            print(4, childObj.const4, "const4");
            print(3, childObj.const3, "const3");
            print("str", childObj.const2, "const2");
            print([], childObj.let7, "let7");
            print({}, childObj.let6, "let6");
            print(undefined, childObj.let5, "let5");
            print(undefined, childObj.let4, "let4");
            print(undefined, childObj.let3, "let3");
            print(2, childObj.let2, "let2");
            print(undefined, childObj.let1, "let1");
            print("class cl2 { }", childObj.cl2.toString(), "cl2");
            print("class cl1 { }", childObj.cl1.toString(), "cl1");
            print("function* gn2 () { }", childObj.gn2.toString(), "gn2");
            print("function* gn1 () { }", childObj.gn1.toString(), "gn1");
            print("function fn2 () { }", childObj.fn2.toString(), "fn2");
            print("function fn1 () { }", childObj.fn1.toString(), "fn1");
            `, '', false);
       }
    },
    {
        name: "namespace internal operations",
        body: function () {
            let functionBody =
                `import * as foo from "ValidExportStatements.js";
                print(null, Object.getPrototypeOf(foo), 'namespace prototype is null');
                print(false, Object.isExtensible(foo), 'namespace is not extensible');
                print(false, Reflect.set(foo, "non_existing", 20), '[[set]] returns false ');
                print(undefined, foo.non_existing, 'namespace object is immutable');
                print(false, Reflect.set(foo, "4", 20), 'cannot set item in namespace obect');
                print(undefined, foo[4], 'cannot export item in namespace obect');
                print(false, Reflect.deleteProperty(foo, "var1"), 'cannot delete export in namespace obect');
                print(true, Reflect.deleteProperty(foo, "nonevar"), 'cannot delete export in namespace obect');
                print(undefined, foo[6], 'cannot get item in namespace obect');
                print(false, Reflect.set(foo, Symbol.species, 20), 'no species property');
                print(undefined, foo[Symbol.species], 'namespace is not contructor');
                print("Module", foo[Symbol.toStringTag], 'namespace toStringTag');
                print("[object Module]", Object.prototype.toString.call(foo), 'Object.prototype.toString uses the module namespace @@toStringTag value');
                var symbols = Object.getOwnPropertySymbols(foo);
                print(1, symbols.length, "one symbol");
                print(symbols[0], Symbol.toStringTag, "first symbol is toStringTag");
                print(Object.prototype.hasOwnProperty.call(foo, Symbol.iterator), "Module namespace object should not have Symbol.iterator property");
                print( function() {Object.setPrototypeOf(foo, Object)}, TypeError, 'Cannot create property for a non-extensible object');
                print(true, Reflect.preventExtensions(foo), '[[PreventExtensions]] for namespace object returns true');`;
            testModuleScript(functionBody, "Test importing as different binding identifiers", false);
       }
    },
    {
        name: "Issue3246: namespace property names are sorted",
        body: function () {
            let functionBody =
                `
                import * as ns from 'ValidExportStatements2.js';
                var p = new Proxy(ns, {});
                var names = ["sym0","default","$","$$","_","\u03bb","aa","A","a","zz","z","\u03bc","Z","za","__","az","\u03c0"].sort();

                var verifyNamespaceOwnProperty = function(obj, objKind) {
                    print(names, Object.getOwnPropertyNames(obj), objKind+" getOwnPropertyNames()");

                    var propDesc = Object.getOwnPropertyDescriptors(obj);
                    print('{"value":"Module","writable":false,"enumerable":false,"configurable":false}', JSON.stringify(propDesc[Symbol.toStringTag]),
                        objKind+" getOwnPropertyDescriptors() @@toStringTag");
                    print(names, Object.keys(propDesc), "ModuleNamespace", objKind+" getOwnPropertyDescriptors()");
                };

                verifyNamespaceOwnProperty(ns, "ModuleNamespace");
                verifyNamespaceOwnProperty(p, "Proxy");

                var propEn = [];
                for (var k in ns) { propEn.push(k); }
                print(names, propEn, "ModuleNamespace enumerator");
                `;
            testModuleScript(functionBody, "Test importing as different binding identifiers", false);
       }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
