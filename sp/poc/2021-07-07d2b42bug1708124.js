


oomTest(
  print(
    `(module
       (func (export "f") (result)
         unreachable))`
  ).exports.f
);
