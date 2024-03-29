




let $0 = instantiate(`(module
  (tag)
  (tag (param i32))
  (tag (export "t2") (param i32))
  (tag $$t3 (param i32 f32))
  (export "t3" (tag 3))
)`);


register($0, `test`);


let $1 = instantiate(`(module
  (tag $$t0 (import "test" "t2") (param i32))
  (import "test" "t3" (tag $$t1 (param i32 f32)))
)`);


assert_invalid(
  () => instantiate(`(module (tag (result i32)))`),
  `non-empty tag result type`,
);
