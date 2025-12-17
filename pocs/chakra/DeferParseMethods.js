print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Various object literal method deferral",
        body: function () {
            var sym = Symbol();
            let out = 'nothing';
            var obj = {
                get a() { return 'get a'; },
                set a(v) { out = 'set a'; },
                b() { return 'b'; },
                ['c']() { return 'c'; },
                [sym]() { return 'sym'; },
                async d() { return 'd'; },
                *e() { yield 'e'; },
                get ['f']() { return 'get f'; },
                set ['f'](v) { out = 'set f'; },
                async ['g']() { return 'g'; },
                *['h']() { yield 'h'; },
                async async() { return 'async async'; },
            }
            var obj2 = {
                async() { return 'async'; }
            }
            var obj3 = {
                get async() { return 'get async'; },
                set async(v) { out = 'set async'; }
            }
            var obj4 = {
                *async() { yield 'generator async'; }
            }

            print('get a', obj.a, "Simple named getter");
            obj.a = 123;
            print('set a', out, "Simple named setter");
            print('b', obj.b(), "Simple method");

            print('c', obj.c(), "Method with computed property name");
            print('sym', obj[sym](), "Method with computed property name (key is not string)");

            print(obj.d() instanceof Promise, "Async method");

            print('e', obj.e().next().value, "Generator method");

            print('get f', obj.f, "Getter method with computed name");
            obj.f = 123;
            print('set f', out, "Setter method with computed name");

            print(obj.g() instanceof Promise, "Async method with computed name");

            print('h', obj.h().next().value, "Generator method with computed name");
            
            print(obj.async() instanceof Promise, "Async method named async");
            print('async', obj2.async(), "Method named async");
            print('get async', obj3.async, "Getter named async");
            obj3.async = 123;
            print('set async', out, "Setter named async");
            print('generator async', obj4.async().next().value, "Generator method named async");
        }
    },
    {
        name: "Uncommon object literal method name types",
        body: function() {
            var out = 'nothing';
            var obj = {
                "s1"() { return "s1"; },
                async "s2"() { return "s2"; },
                * "s3"() { return "s3"; },
                get "s4"() { return "s4"; },
                set "s4"(v) { out = "s4"; },

                0.1() { return 0.1; },
                async 0.2() { return 0.2; },
                * 0.3() { return 0.3; },
                get 0.4() { return 0.4; },
                set 0.4(v) { out = 0.4; },

                123() { return 123; },
                async 456() { return 456; },
                * 789() { yield 789; },
                get 123456() { return 123456; },
                set 123456(v) { out = 123456; },

                while() { return "while"; },
                async else() { return "else"; },
                * if() { return "if"; },
                get catch() { return "catch"; },
                set catch(v) { out = "catch"; },
            }

            print('s1', obj.s1(), "Method with string name");
            print(0.1, obj[0.1](), "Method with float name");
            print(123, obj[123](), "Method with numeric name");
            print('while', obj.while(), "Method with keyword name");
            
            print(obj.s2() instanceof Promise, "Async method with string name");
            print(obj[0.2]() instanceof Promise, "Async method with float name");
            print(obj[456]() instanceof Promise, "Async method with numeric name");
            print(obj.else() instanceof Promise, "Async method with keyword name");

            print('s3', obj.s3().next().value, "Generator method with string name");
            print(0.3, obj[0.3]().next().value, "Generator method with float name");
            print(789, obj[789]().next().value, "Generator method with numeric name");
            print('if', obj.if().next().value, "Generator method with keyword name");

            print('s4', obj.s4, "Getter method with string name");
            print(0.4, obj[0.4], "Getter method with float name");
            print(123456, obj[123456], "Getter method with numeric name");
            print('catch', obj.catch, "Getter method with keyword name");

            obj.s4 = 123
            print('s4', out, "Setter method with string name");
            obj[0.4] = 123
            print(0.4, out, "Setter method with float name");
            obj[123456] = 123
            print(123456, out, "Setter method with numeric name");
            obj.catch = 123
            print('catch', out, "Setter method with keyword name");
        }
    },
    {
        name: "Regular function nested in a deferred method",
        body: function() {
            var obj = {
                m() {
                    function foo() { return 'foo'; }
                    return foo();
                }
            }

            print('foo', obj.m(), "Regular function nested in a deferred method should not be parsed as a method");
        }
    },
    {
        name: "Method with 'super' capture",
        body: function() {
            var obj = {
                m() { return () => super.bar(); }
            }
            Object.setPrototypeOf(obj, { bar() { return this; } });
            
            print(obj, obj.m()(), "Method should call lambda should call super method should return this captured from obj.m");
        }
    },
    {
        name: "Async lambda with parens",
        body: function() {
            var a = async() => { };
            
            print(a() instanceof Promise, "Async lambda with parens around formal parameters")
        }
    }
]

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
