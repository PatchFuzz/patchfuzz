for (var i = 0; i < 15; i++) {
  var x = Object.create([]);
  print(x.length, 0);
}

for (var i = 0; i < 15; i++) {
  function foo() {}
  foo.prototype = [];
  var x = new foo();
  print(x.length, 0);
}
