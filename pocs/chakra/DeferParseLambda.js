print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Simple lambda function deferral",
        body: function () {
            var a = () => { return 123 };
            print(123, a(), "Lambda with no args but empty parens and body surrounded with curly-braces");
            
            var b = (arg) => { return arg; };
            print(123, b(123), "Lambda with an arg in parens");
            
            var c = (arg1, arg2) => { return arg1 + arg2; };
            print(2, c(1, 1), "Lambda with two args in parens");
            
            var d = () => 123
            print(123, d(), "Lambda with empty arg list and single expression-body");
            
            var e = arg => arg
            print(123, e(123), "Lambda with single arg and single expression-body");
            
            var f = arg => { return arg }
            print(123, f(123), "Lambda with single arg and body in curly-braces");
            
            var g = (arg1, arg2) => arg1 + arg2
            print(2, g(1, 1), "Lambda with two args in parens and single expression body");
        }
    },
    {
        name: "Global lambda function deferral",
        body: function () {
            print(`
                var a = () => { return 123 };
                print(123, a(), "Lambda with no args but empty parens and body surrounded with curly-braces");
                
                var b = (arg) => { return arg; };
                print(123, b(123), "Lambda with an arg in parens");
                
                var c = (arg1, arg2) => { return arg1 + arg2; };
                print(2, c(1, 1), "Lambda with two args in parens");
                
                var d = () => 123
                print(123, d(), "Lambda with empty arg list and single expression-body");
                
                var e = arg => arg
                print(123, e(123), "Lambda with single arg and single expression-body");
                
                var f = arg => { return arg }
                print(123, f(123), "Lambda with single arg and body in curly-braces");
                
                var g = (arg1, arg2) => arg1 + arg2
                print(2, g(1, 1), "Lambda with two args in parens and single expression body");
            `);
        }
    },
    {
        name: "Async lambda function deferral",
        body: function () {
            var a = async () => { return 123 };
            print(a() instanceof Promise, "Lambda with no args but empty parens and body surrounded with curly-braces");
            
            var b = async (arg) => { return arg; };
            print(b() instanceof Promise, "Lambda with an arg in parens");
            
            var c = async (arg1, arg2) => { return arg1 + arg2; };
            print(c() instanceof Promise, "Lambda with two args in parens");
            
            var d = async () => 123
            print(d() instanceof Promise, "Lambda with empty arg list and single expression-body");
            
            var e = async arg => arg
            print(e() instanceof Promise, "Lambda with single arg and single expression-body");
            
            var f = async arg => { return arg }
            print(f() instanceof Promise, "Lambda with single arg and body in curly-braces");
            
            var g = async (arg1, arg2) => arg1 + arg2
            print(g() instanceof Promise, "Lambda with two args in parens and single expression body");
        }
    },
    {
        name: "Global async lambda function deferral",
        body: function () {
            print(`
                var a = async () => { return 123 };
                print(a() instanceof Promise, "Lambda with no args but empty parens and body surrounded with curly-braces");
                
                var b = async (arg) => { return arg; };
                print(b() instanceof Promise, "Lambda with an arg in parens");
                
                var c = async (arg1, arg2) => { return arg1 + arg2; };
                print(c() instanceof Promise, "Lambda with two args in parens");
                
                var d = async () => 123
                print(d() instanceof Promise, "Lambda with empty arg list and single expression-body");
                
                var e = async arg => arg
                print(e() instanceof Promise, "Lambda with single arg and single expression-body");
                
                var f = async arg => { return arg }
                print(f() instanceof Promise, "Lambda with single arg and body in curly-braces");
                
                var g = async (arg1, arg2) => arg1 + arg2
                print(g() instanceof Promise, "Lambda with two args in parens and single expression body");
            `);
        }
    },
    {
        name: "Global functions using 'yield' as identifier",
        body: function () {
            print(`
                var a = async (yield) => { yield };
                print(a() instanceof Promise, "Async lambda with yield as a formal parameter name");

                function b(yield) {
                    return yield;
                }
                print('b', b('b'), "Function with yield as a formal parameter name");

                var c = async (yield) => yield;
                print(c() instanceof Promise, "Async lambda with yield as a formal parameter name and compact body");
                
                async function d(yield) {
                    return yield;
                }
                print(d() instanceof Promise, "Async lambda with yield as a formal parameter name and compact body");
            `);
        }
    },
    {
        name: "Nested functions using 'yield' as identifier",
        body: function () {
            var a = async (yield) => { yield };
            print(a() instanceof Promise, "Async lambda with yield as a formal parameter name");

            function b(yield) {
                return yield;
            }
            print('b', b('b'), "Function with yield as a formal parameter name");

            var c = async (yield) => yield;
            print(c() instanceof Promise, "Async lambda with yield as a formal parameter name and compact body");

            async function d(yield) {
                return yield;
            }
            print(d() instanceof Promise, "Async lambda with yield as a formal parameter name and compact body");
            
            var e = async (a = yield) => { yield };
            print(e() instanceof Promise, "Async lambda with yield in a default argument");
            
            var f = async (a = yield) => yield;
            print(f() instanceof Promise, "Async lambda with compact body and yield in a default argument");
        }
    },
]

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
