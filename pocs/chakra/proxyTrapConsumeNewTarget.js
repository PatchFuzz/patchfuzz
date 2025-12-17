print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [{
    name: "Proxy construct trap consumes new.target",
    body: function() {

        let result = "";

        class A {
            constructor() {
                print(B, new.target, "The whole point of the test is to make sure new.target flow through proxy!");
                result += "A";
            }
        }

        var proxyObject = new Proxy(A, {
            construct: function(target, argumentsList, newTarget) {
                result += "proxyObject";
                print(A, target, "A is the target in this case");
                print(0, argumentsList.length, "No arguments are passed");
                print(B, newTarget, "B is also the new.target in this case");
                return Reflect.construct(target, argumentsList, newTarget);
            }
        });

        class B extends proxyObject {
            constructor() {
                result += "B";
                super();
            }
        }

        new B();
        print("BproxyObjectA", result, "Test indeed ran the code I expect it to");
    }
}, {
    name: "Proxy construct trap consumes overridden new.target",
    body: function() {

        let testCompleted = false;

        function MyNewTarget() {
            print(false, "We should not be creating instance of MyNewTarget");
        }

        function MyConstructor() {
            print(MyNewTarget, new.target, "myNewTarget is overridden in this case");
            testCompleted = true;
        }

        Reflect.construct(MyConstructor, [], MyNewTarget);

        print(testCompleted, "Test indeed ran the code I expect it to");
    }
}, {
    name: "Proxy construct trap spread case",
    body: function() {
        let result = "";

        function MyConstructor() {
            print(proxyObject, new.target, "myNewTarget is overridden in this case");
            result += "MyConstructor";
        }

        var proxyObject = new Proxy(MyConstructor, {
            construct: function(target, argumentsList, newTarget) {
                result += "proxyObject";
                print(4, argumentsList.length, "spreaded arguments count should be right");
                print(1, argumentsList[0], "spreaded arguments[0] should be right");
                print(2.25, argumentsList[1], "spreaded arguments[1] should be right");
                print(undefined, argumentsList[2], "spreaded arguments[2] should be right");
                print('hello', argumentsList[3], "spreaded arguments[3] should be right");
                return Reflect.construct(target, argumentsList, newTarget);
            }
        });

        var args = [1, 2.25, undefined, 'hello'];
        var newProxyObject = new proxyObject(...args);
        print("proxyObjectMyConstructor", result, "Test indeed ran the code I expect it to");
    }
}];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
    verbose: WScript.Arguments[0] != "summary"
});
