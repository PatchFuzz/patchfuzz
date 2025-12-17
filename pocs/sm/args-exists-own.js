function testBasic() {
  function arg0() { return Object.hasOwn(arguments, 0); }
  function arg1() { return Object.hasOwn(arguments, 1); }
  function arg100() { return Object.hasOwn(arguments, 100); }
  function argn1() { return Object.hasOwn(arguments, -1); }
  function argv(i) { return Object.hasOwn(arguments, i); }

  for (let i = 0; i < 100; ++i) {
    print(arg0(), false);
    print(arg0(1), true);
    print(arg0(1, 2), true);
    print(arg0(1, 2, 3), true);
    print(arg0(1, 2, 3, 4), true);
    print(arg0(1, 2, 3, 4, 5), true);

    print(arg1(), false);
    print(arg1(1), false);
    print(arg1(1, 2), true);
    print(arg1(1, 2, 3), true);
    print(arg1(1, 2, 3, 4), true);
    print(arg1(1, 2, 3, 4, 5), true);

    print(arg100(), false);
    print(arg100(1), false);
    print(arg100(1, 2), false);
    print(arg100(1, 2, 3), false);
    print(arg100(1, 2, 3, 4), false);
    print(arg100(1, 2, 3, 4, 5), false);

    print(argn1(), false);
    print(argn1(1), false);
    print(argn1(1, 2), false);
    print(argn1(1, 2, 3), false);
    print(argn1(1, 2, 3, 4), false);
    print(argn1(1, 2, 3, 4, 5), false);

    print(argv(i & 3), (i&3) <= 0);
    print(argv(i & 3, 1), (i&3) <= 1);
    print(argv(i & 3, 1, 2), (i&3) <= 2);
    print(argv(i & 3, 1, 2, 3), true);
    print(argv(i & 3, 1, 2, 3, 4), true);
    print(argv(i & 3, 1, 2, 3, 4, 5), true);
  }
}
testBasic();


function testOverriddenLength() {
  function f(i) {
    if (i === 100) {
      arguments.length = 100;
    }
    return Object.hasOwn(arguments, 1);
  }

  for (let i = 0; i <= 150; ++i) {
    print(f(i), false);
  }
}
testOverriddenLength();


function testOverriddenElement() {
  function f(i) {
    if (i === 100) {
      arguments[1] = 0;
    }
    return Object.hasOwn(arguments, 1);
  }

  for (let i = 0; i <= 150; ++i) {
    print(f(i), i === 100);
  }
}
testOverriddenElement();


function testDeletedElement() {
  function f(i) {
    if (i === 100) {
      delete arguments[0];
    }
    return Object.hasOwn(arguments, 0);
  }

  for (let i = 0; i <= 150; ++i) {
    print(f(i), i !== 100);
  }
}
testDeletedElement();



function testForwardedArg() {
  function f(i) {
    function closedOver() {
      if (i === 100) i = 0;
    }
    closedOver();
    return Object.hasOwn(arguments, 0);
  }

  for (let i = 0; i <= 150; ++i) {
    print(f(i), true);
  }
}
testForwardedArg();
