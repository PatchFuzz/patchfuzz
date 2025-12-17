if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
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

            print(1, obj.a);
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
            print(4, result);

            
            const reentrantResult = f({ get b() { obj.a = 3; } });
            print(5, reentrantResult);
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
