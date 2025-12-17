;

let foo = {};
for (let method of ["resolve", "reject", "race"]) {
  print(
    () => Promise[method].call(foo),
    TypeError,
    "foo is not a constructor"
  );
  print(
    () => Promise[method].call(foo, []),
    TypeError,
    "foo is not a constructor"
  );
  print(
    () => Promise[method].call({}, [], foo),
    TypeError,
    "({}) is not a constructor"
  );
}
