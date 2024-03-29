




let $0 = instantiate(`(module
  (type $$t (func))

  (func
    (param
      funcref
      externref
      (ref func)
      (ref extern)
      (ref 0)
      (ref $$t)
      (ref 0)
      (ref $$t)
      (ref null func)
      (ref null extern)
      (ref null 0)
      (ref null $$t)
    )
  )
)`);


assert_invalid(
  () => instantiate(`(module (type $$type-func-param-invalid (func (param (ref 1)))))`),
  `unknown type`,
);


assert_invalid(
  () => instantiate(`(module (type $$type-func-result-invalid (func (result (ref 1)))))`),
  `unknown type`,
);


assert_invalid(
  () => instantiate(`(module (global $$global-invalid (ref null 1) (ref.null 1)))`),
  `unknown type`,
);


assert_invalid(
  () => instantiate(`(module (table $$table-invalid 10 (ref null 1)))`),
  `unknown type`,
);


assert_invalid(
  () => instantiate(`(module (elem $$elem-invalid (ref 1)))`),
  `unknown type`,
);


assert_invalid(
  () => instantiate(`(module (func $$func-param-invalid (param (ref 1))))`),
  `unknown type`,
);


assert_invalid(
  () => instantiate(`(module (func $$func-result-invalid (result (ref 1))))`),
  `unknown type`,
);


assert_invalid(
  () => instantiate(`(module (func $$func-local-invalid (local (ref null 1))))`),
  `unknown type`,
);


assert_invalid(
  () => instantiate(`(module (func $$block-result-invalid (drop (block (result (ref 1)) (unreachable)))))`),
  `unknown type`,
);


assert_invalid(
  () => instantiate(`(module (func $$loop-result-invalid (drop (loop (result (ref 1)) (unreachable)))))`),
  `unknown type`,
);


assert_invalid(
  () => instantiate(`(module (func $$if-invalid (drop (if (result (ref 1)) (then) (else)))))`),
  `unknown type`,
);


assert_invalid(
  () => instantiate(`(module (func $$select-result-invalid (drop (select (result (ref 1)) (unreachable)))))`),
  `unknown type`,
);
