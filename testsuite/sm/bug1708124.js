


oomTest(
  wasmEvalText(
    `(module
       (func (export "f") (result)
         unreachable))`
  ).exports.f
);
