;

function print(str) {
  print(function () { return Function(str); }, SyntaxError);
}

print("for (var x     of 1, 2) {}");
print("for (var [x]   of 1, 2) {}");
print("for (var {x}   of 1, 2) {}");

print("for (let x     of 1, 2) {}");
print("for (let [x]   of 1, 2) {}");
print("for (let {x}   of 1, 2) {}");

print("for (const x   of 1, 2) {}");
print("for (const [x] of 1, 2) {}");
print("for (const {x} of 1, 2) {}");
