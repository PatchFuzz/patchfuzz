print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
  {
    name: "Reflect.construct consumes new.target",
    body: function () {
        class myBaseClass {
            construct() {
                print(myNewTarget, new.target, "the main point of the test is to make sure myNewTarget is passed into the constructor as new.target");
            }
        }

        class myDerivedClass extends myBaseClass {
        }

        function myNewTarget() {
        }

        Reflect.construct(myDerivedClass, [], myNewTarget);
     }
  },
  {
    name: "Reflect.construct should throw a type error if new.target is not a constructor",
    body: function () {
        class myBaseClass {
            construct() {

            }
        }

        class myDerivedClass extends myBaseClass {
        }

        function myNewTarget() {
        }

        print(function () { Reflect.construct(myDerivedClass, [], undefined ) }, TypeError, "undefined is not a constructor", "'newTarget' is not a constructor");
     }
  },
  {
    name: "Reflect.construct should work with Object constructor",
    body: function () {
        var p = {};
        var a = { __proto__: p };

        new class extends Object {
          constructor() {
            super(a);
            print(a.__proto__ === p);
          }
        };

        Reflect.construct(Object, [a]);
        print(a.__proto__ === p);

        var q = {};
        function C() {}
        C.prototype = q;
        var obj = Reflect.construct(Object, [a], C);
        print(obj.__proto__ === q);
        print(a.__proto__ === p);
    }
  }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
