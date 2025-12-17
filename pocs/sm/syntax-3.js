;

function print(str) {
  print(function () { return Function(str); }, SyntaxError);
}

print("for (var x = 1 of []) {}");
print("for (var [x] = 1 of []) {}");
print("for (var {x} = 1 of []) {}");

print("for (let x = 1 of []) {}");
print("for (let [x] = 1 of []) {}");
print("for (let {x} = 1 of []) {}");

print("for (const x = 1 of []) {}");
print("for (const [x] = 1 of []) {}");
print("for (const {x} = 1 of []) {}");
