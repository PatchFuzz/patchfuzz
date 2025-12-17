function foo() {
  var a = new Array({});
  a.shift();
  print(a.hasOwnProperty(0));
}

foo();
