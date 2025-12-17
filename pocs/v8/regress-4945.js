function* g(o) {
  yield 'x' in o;
}

print(g({x: 1}).next().value);
print(g({}).next().value);
