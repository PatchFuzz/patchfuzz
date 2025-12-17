print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
  {
    name: "Assigning a bound function to the proxy's prototype should not fire the assert",
    body: function () {
        var pr = new Proxy({}, {
                getPrototypeOf: function() {
                    return;
                }
            }).__proto__ = Float64Array.bind()
    }
  },
  {
    name: "a function and it's bind function are one context and invoked from a different context",
    body: function () {
        var sc1 = print(`
        function print(a, b) { if (a != b) { throw new Error('expected : ' + a + ', actual : ' + b) } };
        function foo(a, b, c) {
            print(undefined, a);
            print(1, b.x);
            print('three', c);
            return {d:10};
        };
    
        function test() {
            var bf = foo.bind(undefined, undefined, {x:1}, 'three');
            print(10, bf().d);
        
            var bf1 = foo.bind(undefined, undefined);
            print(10, bf1({x:1}, 'three').d);
            }
        `,
        "samethread");
    
        sc1.test();
    }
  },
  {
    name: "a bound function is passed to first context and called from there",
    body: function () {
        var sc1 = print(`
        function print(a, b) { if (a != b) { throw new Error('expected : ' + b + ', actual : ' + a) } };
        function foo(a, b, c) {
            print(undefined, a);
            print(1, b.x);
            print('three', c);
            return {d:10};
        };
    
        var bf1 = foo.bind(undefined, undefined, {x:1}, 'three');
        var bf2 = foo.bind(undefined, undefined);
    
        function test() {
            return foo.bind(undefined, undefined, {x:1}, 'three');
        }
        function test1() {
            return foo.bind(undefined, undefined);
        }
        `,
        "samethread");
    
        print(10, sc1.bf1().d);
        print(10, sc1.bf2({x:1}, 'three').d);
        print(10, sc1.test()().d);
        print(10, sc1.test1()({x:1}, 'three').d);
        }
  },
  {
    name: "bound function is created on second context on the function passed from the first context",
    body: function () {
        function foo(a, b, c) {
            print(undefined, a);
            print(1, b.x);
            print('three', c);
            return {d:10};
        };

        var sc1 = print(`
            var bf1;
            var bf2;
            function setup(func) {
                bf1 = func.bind(undefined, undefined, {x:1}, 'three');
            }
            function setup1(func, a) {
                bf2 = func.bind(func, a);
            }
        
            function test() {
                return bf1();
            }
            function test1(a, b) {
                return bf2(a, b);
            }   
        `,
        "samethread");

        sc1.setup(foo);
        sc1.setup1(foo, undefined);
    
        print(10, sc1.test().d);
        print(10, sc1.test({x:1}, 'three').d);
    
    }
  },
  {
    name: "bound function is created on second context on the function passed from the first context and invoked directly from first context",
    body: function () {
        function foo(a, b, c) {
            print(undefined, a);
            print(1, b.x);
            print('three', c);
            return {d:10};
        };

        var sc1 = print(`
            function test(func) {
                return func.bind(undefined, undefined, {x:1}, 'three');
            }
            function test1(func, a) {
                return func.bind(func, a);
            }
            `,
        "samethread");

        print(10, sc1.test(foo)().d);
        print(10, sc1.test1(foo, undefined)({x:1}, 'three').d);
        
    }
  },
  {
    name: "bound function is created on second context on the function passed from the third context",
    body: function () {
        var sc1 = print(`
            function print(a, b) { if (a != b) { throw new Error('expected : ' + b + ', actual : ' + a) } };
            function foo(a, b, c) {
                print(undefined, a);
                print(1, b.x);
                print('three', c);
                return {d:10};
            };
        `,
        "samethread");
    
        function foo(a, b, c) {
            print(undefined, a);
            print(1, b.x);
            print('three', c);
            return {d:10};
        };

        var sc2 = print(`
            var bf1, bf2;
        
            function setup(obj, a) {
                bf1 = obj.foo.bind(undefined, undefined, {x:1}, 'three');
                bf2 = obj.foo.bind(obj.foo, a);
            }
        
            function test() {
                return bf1();
            }
            function test1(a, b) {
                return bf2(a, b);
            }
        `,
        "samethread");
    
        sc2.setup(sc1, undefined);
        print(10, sc2.test().d);
        print(10, sc2.test1({x:1}, 'three').d);
    }
  },
  
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
