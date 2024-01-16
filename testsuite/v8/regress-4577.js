



function f(...arguments) {
  return Array.isArray(arguments);
}
assertTrue(f());

function g({arguments}) {
  return arguments === 42;
}
assertTrue(g({arguments: 42}));

function foo() {
  let arguments = 2;
  return arguments;
}
assertEquals(2, foo());

assertThrows(function(x = arguments, arguments) {}, ReferenceError);
