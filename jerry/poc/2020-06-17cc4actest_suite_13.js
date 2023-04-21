













(function tc_13__012() {
  function foo(a, b, c, d) {
    var deleted = true;
    for (i = 0; i < arguments.length; i++)
    {
      delete arguments[i];
      deleted = deleted && (typeof (arguments[i]) === "undefined");
    }
    return deleted;
  }

  print(foo("A", "F", 1, true) === true);
})();

(function tc_13__005() {
  var foo = 1;

  print(foo === 1);

  function foo()
  {
      return 1;
  }
})();

(function tc_13__013() {
  function foo(arguments) {
    return arguments;
  }

  print(foo(1) === 1);
})();

(function tc_13__010() {
  function foo() {
    return 1;
  }
  var object = new Object;
  object.fun = foo;

  print(object.fun() === 1);
})();

(function tc_13__001() {
  var b = 1;
  for (var i = 1; i < 10; ++i)
  {
    b *= i;
  }
  var c = b;

  print(c == 362880);
})();

(function tc_13__007() {
  function foo(arg) {
    return ++arg;
  }

  print(foo(1) === 2);
})();

(function tc_13__008() {
  function foo(params) {
    return arguments.length;
  }

  print(foo(1, 'e', true, 5) === 4);
})();

(function tc_13__003() {
  print(function (param1, param2) {
    return 1;
  }(true, "blah") === 1);
})();

(function tc_13__011() {
  function foo(param1) {
    return delete arguments;
  }

  print(!foo("param"));
})();

(function tc_13__002() {
  function foo() {
    return 1;
  }

  print(foo() === 1);
})();

(function tc_13__009() {
  var check = typeof (foo) === "function";

  var foo = 1;

  check = check && (foo === 1);

  function foo() {
    return 1;
  }

  print(check);
})();

(function tc_13__006() {
  function foo() {
  }

  print(foo() === undefined);
})();

(function tc_13__004() {
  function foo() {
  }

  print(typeof foo === "function");
})();

(function tc_13_01__001() {
  function arguments (param) {
    return true;
  }
  print(arguments ());
})();

(function tc_13_02__001() {
  var foo = function () {
    this.caller = 123;
  };
  var f = new foo();
  print(f.caller === 123);
})();

(function tc_13_02__007() {
  var obj = new function foo()
  {
    this.prop = 1;
  };

  print(obj.prop === 1);
})();

(function tc_13_02__003() {
  function foo(arg) {
    arg.prop = 3;
  }
  var obj = new Object();
  foo(obj);

  print(obj.prop === 3);
})();

(function tc_13_02__006() {
  function foo() {
    return;
  }

  print(foo() === undefined);
})();

(function tc_13_02__004() {
  function foo(arg) {
    arg += 3;
  }

  var num = 1;
  foo(num);

  print(num === 1);
})();

(function tc_13_02__005() {
  function foo() {
    return null;
  }

  print(foo() === null);
})();

(function tc_13_02__008() {
  function func() {
  }

  print(Function.prototype.isPrototypeOf(func));
})();
