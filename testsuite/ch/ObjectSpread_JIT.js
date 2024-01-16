






if (this.WScript && this.WScript.LoadScriptFile) { 
    this.WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "Test JIT basic behavior",
        body: function() {
            function f() {
                return {...{a: 1}};
            }
            
            f();
            let obj = f();

            assert.areEqual(1, obj.a);
        }
    },
    {
        name: "Test JIT bailout",
        body: function() {
            const obj = { a: 2 };
            function f(x) {
                const a = obj.a;
                const unused = {...x};
                return a + obj.a;
            }

            
            const result = f({});
            assert.areEqual(4, result);

            
            const reentrantResult = f({ get b() { obj.a = 3; } });
            assert.areEqual(5, reentrantResult);
        }
    },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
