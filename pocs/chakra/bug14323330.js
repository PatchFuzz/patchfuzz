var r = typeof this;

print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
  {
    name: "typeof global this is 'object'",
    body: function () {
        print('object', r, "'typeof this' is 'object' for the global this");
    }
  },
  {
    name: "typeof nested function this",
    body: function () {
        function foo() {
            return typeof this;
        }
        print('object', foo(), "'typeof this' is 'object' for nested function this called with default 'this' binding");
        print('function', foo.call(foo), "'typeof this' should be 'function' when 'this' binding is overriden");
        
        function bar() {
            "use strict";
            return typeof this;
        }
        print('undefined', bar(), "'typeof this' is 'undefined' for nested strict function this called with default 'this' binding");
        print('function', bar.call(bar), "'typeof this' should be 'function' when 'this' binding is overriden");
    }
  },
  {
    name: "typeof nested function new.target",
    body: function () {
        var out = 'wrong';
        function foo() {
            out = typeof new.target;
        }
        foo();
        print('undefined', out, "'typeof new.target' is 'undefined' for normal function call");
        new foo();
        print('function', out, "'typeof new.target' is 'function' for function called as constructor");
    }
  },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
