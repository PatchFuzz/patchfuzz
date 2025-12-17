;

function g(a, b, c) {
  this.value = [a, b, c];
  print(Object.getPrototypeOf(this), g.prototype);
  print(arguments.callee, g);
}

print(new g(...[1, 2, 3]).value, [1, 2, 3]);
