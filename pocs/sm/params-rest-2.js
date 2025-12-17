;

var f = (a, b, ...rest) => [a, b, rest];
print(f(), [(void 0), (void 0), []]);
print(f(1, 2, 3, 4), [1, 2, [3, 4]]);
