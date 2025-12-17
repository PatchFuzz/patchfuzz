print("..\\UnitTestFramework\\UnitTestFramework.js");

function testScript(source, message, shouldFail = false, explicitAsync = false) {
    message += " (script)";
    let testfunc = () => testRunner.LoadScript(source, undefined, shouldFail, explicitAsync);

    if (shouldFail) {
        let caught = false;

        print(testfunc, SyntaxErrr, message);
        print(caught, `Expected error not thrown: ${message}`);
    } else {
        print(testfunc, message);
    }
}

function testModuleScript(source, message, shouldFail = false, explicitAsync = false) {
    message += " (module)";
    let testfunc = () => testRunner.LoadModule(source, 'samethread', shouldFail, explicitAsync);

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

function testDynamicImport(importFunc, thenFunc, catchFunc, _asyncEnter, _asyncExit) {
    var promise = importFunc();
    print(promise instanceof Promise);
    promise.then((v)=>{
        _asyncEnter();
        thenFunc(v);
        _asyncExit();
    }).catch((err)=>{
        _asyncEnter();
        catchFunc(err);
        _asyncExit();
    });
}

function testDoubleDynamicImport(importFunc, secondFunc, thirdFunc, catchFunc, _asyncEnter, _asyncExit) {
	let promise = importFunc();
    print(promise instanceof Promise);
    promise.then((v)=>{
        _asyncEnter();
		let secondPromise = secondFunc(v);
		secondPromise.then((v2)=>{
			_asyncEnter();
			thirdFunc(v2);
			_asyncExit();
		});
        _asyncExit();
	}).catch((err)=>{
        _asyncEnter();
        catchFunc(err);
        _asyncExit();
	});
}

var tests = [
    {
        name: "Runtime evaluation of module specifier",
        body: function () {
            let functionBody =
                `testDynamicImport(
                    ()=>{
                        var getName = ()=>{ return 'ModuleSimpleExport'; };
                        return import( getName() + '.js');
                    },
                    (v)=>{
                        print('ModuleSimpleExport', v.ModuleSimpleExport_foo(), 'Failed to import ModuleSimpleExport_foo from ModuleSimpleExport.js');
                    },
                    (err)=>{ print(err.message); }, _asyncEnter, _asyncExit
                )`;
            testScript(functionBody, "Test importing a simple exported function", false, true);
            testModuleScript(functionBody, "Test importing a simple exported function", false, true);
        }
    },
    {
        name: "Validate a simple module export",
        body: function () {
            let functionBody =
                `testDynamicImport(
                    ()=>{ return import('ModuleSimpleExport.js'); },
                    (v)=>{ print('ModuleSimpleExport', v.ModuleSimpleExport_foo(), 'Failed to import ModuleSimpleExport_foo from ModuleSimpleExport.js'); },
                    (err)=>{ print(err.message); }, _asyncEnter, _asyncExit
                )`;
            testScript(functionBody, "Test importing a simple exported function", false, true);
            testModuleScript(functionBody, "Test importing a simple exported function", false, true);
        }
    },
    {
        name: "Validate importing from multiple modules",
        body: function () {
            let functionBody =
                `testDynamicImport(
                    ()=>import('ModuleComplexExports.js'),
                    (v)=>{
                        print('foo', v.foo2(), 'Failed to import foo2 from ModuleComplexExports.js');
                    },
                    (err)=>{ print(err.message); }, _asyncEnter, _asyncExit
                )`;
            testScript(functionBody, "Test importing from multiple modules", false, true);
            testModuleScript(functionBody, "Test importing from multiple modules", false, true);
        }
    },
    {
        name: "Validate a variety of more complex exports",
        body: function () {
            let functionBody =
                `testDynamicImport(
                    ()=>import('ModuleComplexExports.js'),
                    (v)=>{
                        print('foo', v.foo(), 'Failed to import foo from ModuleComplexExports.js');
                        print('foo', v.foo2(), 'Failed to import foo2 from ModuleComplexExports.js');
                        print('bar', v.bar(), 'Failed to import bar from ModuleComplexExports.js');
                        print('bar', v.bar2(), 'Failed to import bar2 from ModuleComplexExports.js');
                        print('let2', v.let2, 'Failed to import let2 from ModuleComplexExports.js');
                        print('let3', v.let3, 'Failed to import let3 from ModuleComplexExports.js');
                        print('let2', v.let4, 'Failed to import let4 from ModuleComplexExports.js');
                        print('let3', v.let5, 'Failed to import let5 from ModuleComplexExports.js');
                        print('const2', v.const2, 'Failed to import const2 from ModuleComplexExports.js');
                        print('const3', v.const3, 'Failed to import const3 from ModuleComplexExports.js');
                        print('const2', v.const4, 'Failed to import const4 from ModuleComplexExports.js');
                        print('const3', v.const5, 'Failed to import const5 from ModuleComplexExports.js');
                        print('var2', v.var2, 'Failed to import var2 from ModuleComplexExports.js');
                        print('var3', v.var3, 'Failed to import var3 from ModuleComplexExports.js');
                        print('var2', v.var4, 'Failed to import var4 from ModuleComplexExports.js');
                        print('var3', v.var5, 'Failed to import var5 from ModuleComplexExports.js');
                        print('class2', v.class2.static_member(), 'Failed to import class2 from ModuleComplexExports.js');
                        print('class2', new v.class2().member(), 'Failed to create intance of class2 from ModuleComplexExports.js');
                        print('class2', v.class3.static_member(), 'Failed to import class3 from ModuleComplexExports.js');
                        print('class2', new v.class3().member(), 'Failed to create intance of class3 from ModuleComplexExports.js');
                        print('class4', v.class4.static_member(), 'Failed to import class4 from ModuleComplexExports.js');
                        print('class4', new v.class4().member(), 'Failed to create intance of class4 from ModuleComplexExports.js');
                        print('class4', v.class5.static_member(), 'Failed to import class4 from ModuleComplexExports.js');
                        print('class4', new v.class5().member(), 'Failed to create intance of class4 from ModuleComplexExports.js');
                        print('default', v.default(), 'Failed to import default from ModuleComplexExports.js');
                        print('ModuleComplexExports', v.function, 'Failed to import v.function from ModuleComplexExports.js');
                        print('ModuleComplexExports', v.export, 'Failed to import v.export from ModuleComplexExports.js');
                    },
                    (err)=>{ print(err.message); }, _asyncEnter, _asyncExit);
                `;
            testScript(functionBody, "Test importing a variety of exports", false, true);
            testModuleScript(functionBody, "Test importing a variety of exports", false, true);
        }
    },
    {
        name: "Exporting module changes exported value",
        body: function () {
            let functionBody =
                `testDynamicImport(
                    ()=>import('ModuleComplexExports.js'),
                    (v)=>{
                        v.reset();
                        print('before', v.target(), 'Failed to import target from ModuleComplexExports.js');
                        print('ok', v.changeTarget(), 'Failed to import changeTarget from ModuleComplexExports.js');
                        print('after', v.target(), 'changeTarget failed to change export value');
                    },
                    (err)=>{ print(err.message); }, _asyncEnter, _asyncExit);
                `;
            testScript(functionBody, "Changing exported value", false, true);
            testModuleScript(functionBody, "Changing exported value", false, true);
        }
    },
    {
        name: "Simple re-export forwards import to correct slot",
        body: function () {
            let functionBody =
                `testDynamicImport(
                    ()=>import('ModuleSimpleReexport.js'),
                    (v)=>{
                        print('ModuleSimpleExport', v.ModuleSimpleExport_foo(), 'Failed to import ModuleSimpleExport_foo from ModuleSimpleReexport.js');
                    },
                    (err)=>{ print(err.message); }, _asyncEnter, _asyncExit);
                `;
            testScript(functionBody, "Simple re-export from one module to another", false, true);
            testModuleScript(functionBody, "Simple re-export from one module to another", false, true);
        }
    },
    {
        name: "Renamed re-export and dynamic import",
        body: function () {
            let functionBody =
                `testDynamicImport(
                    ()=>import('ModuleComplexReexports.js'),
                    (v)=>{
                        print('bar', v.ModuleComplexReexports_foo(), 'Failed to import ModuleComplexReexports_foo from ModuleComplexReexports.js');
                    },
                    (err)=>{ print(err.message); }, _asyncEnter, _asyncExit);
                `;
            testScript(functionBody, "Rename already renamed re-export", false, true);
            testModuleScript(functionBody, "Rename already renamed re-export", false, true);
        }
    },
    {
        name: "Explicit export/import to default binding",
        body: function () {
            let functionBody =
                `testDynamicImport(
                    ()=>import('ModuleDefaultExport1.js'),
                    (v)=>{
                        print('ModuleDefaultExport1', v.default(), 'Failed to import default from ModuleDefaultExport1.js');
                    },
                    (err)=>{ print(err.message); }, _asyncEnter, _asyncExit);
                `;
            testScript(functionBody, "Explicitly export and import a local name to the default binding", false, true);
            testModuleScript(functionBody, "Explicitly export and import a local name to the default binding", false, true);
        }
    },
    {
        name: "Explicit import of default binding",
        body: function () {
            let functionBody =
                `testDynamicImport(
                    ()=>import('ModuleDefaultExport2.js'),
                    (v)=>{
                        print('ModuleDefaultExport2', v.default(), 'Failed to import default from ModuleDefaultExport2.js');
                    },
                    (err)=>{ print(err.message); }, _asyncEnter, _asyncExit);
                `;
            testScript(functionBody, "Explicitly import the default export binding", false, true);
            testModuleScript(functionBody, "Explicitly import the default export binding", false, true);
        }
    },
    {
        name: "Exporting module changes value of default export",
        body: function () {
            let functionBody =
                `testDynamicImport(
                    ()=>import('ModuleDefaultExport3.js'),
                    (v)=>{
                        print(2, v.default, 'Failed to import default from ModuleDefaultExport3.js');
                    },
                    (err)=>{ print(err.message); }, _asyncEnter, _asyncExit);
                `;
            testScript(functionBody, "Exported value incorrectly bound", false, true);
            testModuleScript(functionBody, "Exported value incorrectly bound", false, true);

            functionBody =
                `testDynamicImport(
                    ()=>import('ModuleDefaultExport4.js'),
                    (v)=>{
                        print(1, v.default, 'Failed to import default from ModuleDefaultExport4.js');
                    },
                    (err)=>{ print(err.message); }, _asyncEnter, _asyncExit);
                `;
            testScript(functionBody, "Exported value incorrectly bound", false, true);
            testModuleScript(functionBody, "Exported value incorrectly bound", false, true);
        }
    },
    {
        name: "Import bindings used in a nested function",
        body: function () {
            let functionBody =
                `function test(func) {
                    print('ModuleDefaultExport2', func(), 'Failed to import default from ModuleDefaultExport2.js');
                }
                testDynamicImport(
                    ()=>import('ModuleDefaultExport2.js'),
                    (v)=>test(v.default),
                    (err)=>{ print(err.message); }, _asyncEnter, _asyncExit);
                `;
            testScript(functionBody, "Failed to find imported name correctly in nested function", false, true);
            testModuleScript(functionBody, "Failed to find imported name correctly in nested function", false, true);
        }
    },
    {
        name: "Exported name may be any keyword",
        body: function () {
            let functionBody =
                `testDynamicImport(
                    ()=>import('ModuleComplexExports.js'),
                    (v)=>{
                        print('ModuleComplexExports', v.export, 'Failed to import export from ModuleDefaultExport2.js');
                        print('ModuleComplexExports', v.function, 'Failed to import function from ModuleDefaultExport2.js');
                    },
                    (err)=>{ print(err.message); }, _asyncEnter, _asyncExit);
                `;
            testScript(functionBody, "Exported name may be a keyword (import binding must be binding identifier)", false, true);
            testModuleScript(functionBody, "Exported name may be a keyword (import binding must be binding identifier)", false, true);
        }
    },
    {
        name: "Odd case of 'export { as as as }; import { as as as };'",
        body: function () {
            let functionBody =
                `testDynamicImport(
                    ()=>import('ModuleComplexExports.js'),
                    (v)=>{
                        print('as', v.as(), 'String "as" is not reserved word');
                    },
                    (err)=>{ print(err.message); }, _asyncEnter, _asyncExit);
                `;
            testScript(functionBody, "Test 'import { as as as}'", false, true);
            testModuleScript(functionBody, "Test 'import { as as as}'", false, true);
        }
    },
    {
        name: "Typeof a module export",
        body: function () {
            let functionBody =
                `testDynamicImport(
                    ()=>import('ModuleDefaultExport2.js'),
                    (v)=>{
                        print('function', typeof v.default, 'typeof default export from ModuleDefaultExport2.js is function');
                    },
                    (err)=>{ print(err.message); }, _asyncEnter, _asyncExit);
                `;

            testScript(functionBody, "Typeof a module export", false, true);
            testModuleScript(functionBody, "Typeof a module export", false, true);
        }
    },
    {
        name: "Circular module dependency",
        body: function () {
            let functionBody =
                `testDynamicImport(
                    ()=>import('ModuleCircularFoo.js'),
                    (v)=>{
                        v.reset();
                        print(2, v.circular_foo(), 'This function calls between both modules in the circular dependency incrementing a counter in each');
                        print(4, v.rexportbar(), 'Second call originates in the other module but still increments the counter twice');
                    },
                    (err)=>{ print(err.message); }, _asyncEnter, _asyncExit);
                `;

            testScript(functionBody, "Circular module dependency", false, true);
            testModuleScript(functionBody, "Circular module dependency", false, true);

        }
    },
    {
        name: "Implicitly re-exporting an import binding (import { foo } from ''; export { foo };)",
        body: function () {
            let functionBody =
                `testDynamicImport(
                    ()=>import('ModuleComplexReexports.js'),
                    (v)=>{
                        print('foo', v.foo(), 'Simple implicit re-export');
                        print('foo', v.baz(), 'Renamed export imported and renamed during implicit re-export');
                        print('foo', v.localfoo(), 'Export renamed as import and implicitly re-exported');
                        print('foo', v.bar(), 'Renamed export renamed as import and renamed again during implicit re-exported');
                        print('foo', v.localfoo2(), 'Renamed export renamed as import and implicitly re-exported');
                        print('foo', v.bar2(), 'Renamed export renamed as import and renamed again during implicit re-export');
                    },
                    (err)=>{ print(err.message); }, _asyncEnter, _asyncExit);
                `;

            testScript(functionBody, "Implicitly re-exporting an import binding (import { foo } from ''; export { foo };)", false, true);
            testModuleScript(functionBody, "Implicitly re-exporting an import binding (import { foo } from ''; export { foo };)", false, true);
        }
    },
    {
        name: "Validate a simple module export inside eval()",
        body: function () {
            let functionBody =
                `testDynamicImport(
                    ()=>{ return eval("import('ModuleSimpleExport.js')"); },
                    (v)=>{ print('ModuleSimpleExport', v.ModuleSimpleExport_foo(), 'Failed to import ModuleSimpleExport_foo from ModuleSimpleExport.js'); },
                    (err)=>{ print(err.message); }, _asyncEnter, _asyncExit
                )`;
            testScript(functionBody, "Test importing a simple exported function", false, true);
            testModuleScript(functionBody, "Test importing a simple exported function", false, true);
        }
    },
    {
        name: "Test dynamic import of an un-parsed module from a module",
        body: function () {
            let functionBody =
                `testDoubleDynamicImport(
                    ()=>{ return import('testDynamicImportfromModule.js'); },
					(v)=>{ return v.foo; },
					(v2)=>{ print(true, v.foo.success, "Failed to load module dynamicly from module");},
                    (err)=>{ print(err.message); }, _asyncEnter, _asyncExit
                )`;
			testModuleScript(functionBody, "Test dynamic import of an un-parsed module from a module", false, true);
			
			
        }
    },
    {
        name : "Test 'new import()' throws - Bug Issue 5797",
        body: function() {
            print(()=>{eval('new import("ModuleSimpleExport.js")')}, SyntaxError);
        }
    },
    {
        name : "Test that import() always gives different promise objects - Bug Issue #5795",
        body: function () {
            print("testModule", "export const a = 5;");
            let functionBody =
                `testDynamicImport(function () {
                    const first = import ('ModuleSimpleExport.js');
                    const second = import ('ModuleSimpleExport.js');
                    print(first !== second, 'import() should not return the same promise');
                    return Promise.all([first, second]).then ((results) => ({first, second, results}));
                }, function (imports) {
                    print(imports.first !== imports.second, 'import() should not return the same promise after resolution');
                    print(imports.results[0] === imports.results[1], 'import() should return the same namespace object');
                }, function (e) {
                    print ("Test should not throw, threw " + e);
                }, _asyncEnter, _asyncExit);`;
            testScript(functionBody, "Test that import() always gives different promise objects", false, true);
            testModuleScript(functionBody, "Test that import() always gives different promise objects", false, true);
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
