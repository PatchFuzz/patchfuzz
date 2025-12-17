print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
  {
    name: "Object literal shorthand syntax with symbol lookup",
    body: function () {
        (function () {
            let a = 1;
            {
                let a = 2;
                var m = {a};
                print(m.a, 2, "Name node in object literal shorthand is binding correctly with inner block");
            }
        })();

        {
            let a2 = 1;
            ({a2} = {a2:2});
            print(a2, 2, "Destructuring object pattern : Name node in object literal shorthand is binding correctly with inner block");
        }
        {
            
            { d; }

            {
                { { d;} };
                var c = {d};
            }

            {
                var d = [];
            }
        }
    }
  },
  {
    name: "Getter/setter methods defined in object literal should not have 'prototype' property",
    body: function () {
        var o = {
            get m() {},
            set m(v) {}
        };
        var g = Object.getOwnPropertyDescriptor(o, 'm').get;
        var s = Object.getOwnPropertyDescriptor(o, 'm').set;
        print(false, g.hasOwnProperty('prototype'), "Getter method defined in object literal should not have 'prototype' property");
        print(false, s.hasOwnProperty('prototype'), "Setter method defined in object literal should not have 'prototype' property");
    }
  },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
