



function foo() {
  var a = new Array({});
  a.shift();
  assertFalse(a.hasOwnProperty(0));
}

foo();
