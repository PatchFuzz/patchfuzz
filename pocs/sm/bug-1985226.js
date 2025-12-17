;

a = parseModule(`import 'b' with { b: 'bar'}`);
print(function () {
  moduleLink(a);
}, SyntaxError)