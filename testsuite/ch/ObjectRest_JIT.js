






if (this.WScript && this.WScript.LoadScriptFile) { 
    this.WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    {
        name: "Test JIT basic behavior",
        body: function() {
            function f() {
                let {a, ...rest} = {a: 1, b: 2};
                return rest;
            }
            
            f();
            let rest = f();

            assert.areEqual(2, rest.b);
        }
    },
    {
        name: "Test JIT basic behavior on binding pattern",
        body: function() {
            function f({a, ...rest}) {
                return rest;
            }
            
            f({a: 1, b: 2});
            let rest = f({a: 1, b: 2});

            assert.areEqual(2, rest.b);
        }
    },
    
    
    
    
    
    
    
    
            
    
    

    
    
    
    {
        name: "Test JIT bailout",
        body: function() {
            const obj = {a: 2};
            function f(x) {
                const a = obj.a;
                const {...unused} = x;
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
