{
  const x = [, 1];
  x.__proto__ = [42];
  const y = [...x];
  print([42, 1], y);
  print(y.hasOwnProperty(0));
}

{
  const x = [, 1];
  x.__proto__ = [42];
  print(42, x[Symbol.iterator]().next().value);
}

{
  const array_prototype = [].__proto__;
  array_prototype[0] = 42;
  const x = [, 1];
  print(42, x[Symbol.iterator]().next().value);
  delete array_prototype[0];
}
