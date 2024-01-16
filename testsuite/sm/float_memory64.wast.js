




let $0 = instantiate(`(module
  (memory i64 (data "\\00\\00\\a0\\7f"))

  (func (export "f32.load") (result f32) (f32.load (i64.const 0)))
  (func (export "i32.load") (result i32) (i32.load (i64.const 0)))
  (func (export "f32.store") (f32.store (i64.const 0) (f32.const nan:0x200000)))
  (func (export "i32.store") (i32.store (i64.const 0) (i32.const 0x7fa00000)))
  (func (export "reset") (i32.store (i64.const 0) (i32.const 0)))
)`);


assert_return(() => invoke($0, `i32.load`, []), [value("i32", 2141192192)]);


assert_return(() => invoke($0, `f32.load`, []), [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]);


invoke($0, `reset`, []);


assert_return(() => invoke($0, `i32.load`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `f32.load`, []), [value("f32", 0)]);


invoke($0, `f32.store`, []);


assert_return(() => invoke($0, `i32.load`, []), [value("i32", 2141192192)]);


assert_return(() => invoke($0, `f32.load`, []), [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]);


invoke($0, `reset`, []);


assert_return(() => invoke($0, `i32.load`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `f32.load`, []), [value("f32", 0)]);


invoke($0, `i32.store`, []);


assert_return(() => invoke($0, `i32.load`, []), [value("i32", 2141192192)]);


assert_return(() => invoke($0, `f32.load`, []), [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]);


let $1 = instantiate(`(module
  (memory i64 (data "\\00\\00\\00\\00\\00\\00\\f4\\7f"))

  (func (export "f64.load") (result f64) (f64.load (i64.const 0)))
  (func (export "i64.load") (result i64) (i64.load (i64.const 0)))
  (func (export "f64.store") (f64.store (i64.const 0) (f64.const nan:0x4000000000000)))
  (func (export "i64.store") (i64.store (i64.const 0) (i64.const 0x7ff4000000000000)))
  (func (export "reset") (i64.store (i64.const 0) (i64.const 0)))
)`);


assert_return(() => invoke($1, `i64.load`, []), [value("i64", 9219994337134247936n)]);


assert_return(
  () => invoke($1, `f64.load`, []),
  [bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0x7f])],
);


invoke($1, `reset`, []);


assert_return(() => invoke($1, `i64.load`, []), [value("i64", 0n)]);


assert_return(() => invoke($1, `f64.load`, []), [value("f64", 0)]);


invoke($1, `f64.store`, []);


assert_return(() => invoke($1, `i64.load`, []), [value("i64", 9219994337134247936n)]);


assert_return(
  () => invoke($1, `f64.load`, []),
  [bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0x7f])],
);


invoke($1, `reset`, []);


assert_return(() => invoke($1, `i64.load`, []), [value("i64", 0n)]);


assert_return(() => invoke($1, `f64.load`, []), [value("f64", 0)]);


invoke($1, `i64.store`, []);


assert_return(() => invoke($1, `i64.load`, []), [value("i64", 9219994337134247936n)]);


assert_return(
  () => invoke($1, `f64.load`, []),
  [bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0x7f])],
);


let $2 = instantiate(`(module
  (memory i64 (data "\\00\\00\\00\\a0\\7f"))

  (func (export "f32.load") (result f32) (f32.load (i64.const 1)))
  (func (export "i32.load") (result i32) (i32.load (i64.const 1)))
  (func (export "f32.store") (f32.store (i64.const 1) (f32.const nan:0x200000)))
  (func (export "i32.store") (i32.store (i64.const 1) (i32.const 0x7fa00000)))
  (func (export "reset") (i32.store (i64.const 1) (i32.const 0)))
)`);


assert_return(() => invoke($2, `i32.load`, []), [value("i32", 2141192192)]);


assert_return(() => invoke($2, `f32.load`, []), [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]);


invoke($2, `reset`, []);


assert_return(() => invoke($2, `i32.load`, []), [value("i32", 0)]);


assert_return(() => invoke($2, `f32.load`, []), [value("f32", 0)]);


invoke($2, `f32.store`, []);


assert_return(() => invoke($2, `i32.load`, []), [value("i32", 2141192192)]);


assert_return(() => invoke($2, `f32.load`, []), [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]);


invoke($2, `reset`, []);


assert_return(() => invoke($2, `i32.load`, []), [value("i32", 0)]);


assert_return(() => invoke($2, `f32.load`, []), [value("f32", 0)]);


invoke($2, `i32.store`, []);


assert_return(() => invoke($2, `i32.load`, []), [value("i32", 2141192192)]);


assert_return(() => invoke($2, `f32.load`, []), [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]);


let $3 = instantiate(`(module
  (memory i64 (data "\\00\\00\\00\\00\\00\\00\\00\\f4\\7f"))

  (func (export "f64.load") (result f64) (f64.load (i64.const 1)))
  (func (export "i64.load") (result i64) (i64.load (i64.const 1)))
  (func (export "f64.store") (f64.store (i64.const 1) (f64.const nan:0x4000000000000)))
  (func (export "i64.store") (i64.store (i64.const 1) (i64.const 0x7ff4000000000000)))
  (func (export "reset") (i64.store (i64.const 1) (i64.const 0)))
)`);


assert_return(() => invoke($3, `i64.load`, []), [value("i64", 9219994337134247936n)]);


assert_return(
  () => invoke($3, `f64.load`, []),
  [bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0x7f])],
);


invoke($3, `reset`, []);


assert_return(() => invoke($3, `i64.load`, []), [value("i64", 0n)]);


assert_return(() => invoke($3, `f64.load`, []), [value("f64", 0)]);


invoke($3, `f64.store`, []);


assert_return(() => invoke($3, `i64.load`, []), [value("i64", 9219994337134247936n)]);


assert_return(
  () => invoke($3, `f64.load`, []),
  [bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0x7f])],
);


invoke($3, `reset`, []);


assert_return(() => invoke($3, `i64.load`, []), [value("i64", 0n)]);


assert_return(() => invoke($3, `f64.load`, []), [value("f64", 0)]);


invoke($3, `i64.store`, []);


assert_return(() => invoke($3, `i64.load`, []), [value("i64", 9219994337134247936n)]);


assert_return(
  () => invoke($3, `f64.load`, []),
  [bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0x7f])],
);


let $4 = instantiate(`(module
  (memory i64 (data "\\01\\00\\d0\\7f"))

  (func (export "f32.load") (result f32) (f32.load (i64.const 0)))
  (func (export "i32.load") (result i32) (i32.load (i64.const 0)))
  (func (export "f32.store") (f32.store (i64.const 0) (f32.const nan:0x500001)))
  (func (export "i32.store") (i32.store (i64.const 0) (i32.const 0x7fd00001)))
  (func (export "reset") (i32.store (i64.const 0) (i32.const 0)))
)`);


assert_return(() => invoke($4, `i32.load`, []), [value("i32", 2144337921)]);


assert_return(() => invoke($4, `f32.load`, []), [bytes("f32", [0x1, 0x0, 0xd0, 0x7f])]);


invoke($4, `reset`, []);


assert_return(() => invoke($4, `i32.load`, []), [value("i32", 0)]);


assert_return(() => invoke($4, `f32.load`, []), [value("f32", 0)]);


invoke($4, `f32.store`, []);


assert_return(() => invoke($4, `i32.load`, []), [value("i32", 2144337921)]);


assert_return(() => invoke($4, `f32.load`, []), [bytes("f32", [0x1, 0x0, 0xd0, 0x7f])]);


invoke($4, `reset`, []);


assert_return(() => invoke($4, `i32.load`, []), [value("i32", 0)]);


assert_return(() => invoke($4, `f32.load`, []), [value("f32", 0)]);


invoke($4, `i32.store`, []);


assert_return(() => invoke($4, `i32.load`, []), [value("i32", 2144337921)]);


assert_return(() => invoke($4, `f32.load`, []), [bytes("f32", [0x1, 0x0, 0xd0, 0x7f])]);


let $5 = instantiate(`(module
  (memory i64 (data "\\01\\00\\00\\00\\00\\00\\fc\\7f"))

  (func (export "f64.load") (result f64) (f64.load (i64.const 0)))
  (func (export "i64.load") (result i64) (i64.load (i64.const 0)))
  (func (export "f64.store") (f64.store (i64.const 0) (f64.const nan:0xc000000000001)))
  (func (export "i64.store") (i64.store (i64.const 0) (i64.const 0x7ffc000000000001)))
  (func (export "reset") (i64.store (i64.const 0) (i64.const 0)))
)`);


assert_return(() => invoke($5, `i64.load`, []), [value("i64", 9222246136947933185n)]);


assert_return(
  () => invoke($5, `f64.load`, []),
  [bytes("f64", [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0xfc, 0x7f])],
);


invoke($5, `reset`, []);


assert_return(() => invoke($5, `i64.load`, []), [value("i64", 0n)]);


assert_return(() => invoke($5, `f64.load`, []), [value("f64", 0)]);


invoke($5, `f64.store`, []);


assert_return(() => invoke($5, `i64.load`, []), [value("i64", 9222246136947933185n)]);


assert_return(
  () => invoke($5, `f64.load`, []),
  [bytes("f64", [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0xfc, 0x7f])],
);


invoke($5, `reset`, []);


assert_return(() => invoke($5, `i64.load`, []), [value("i64", 0n)]);


assert_return(() => invoke($5, `f64.load`, []), [value("f64", 0)]);


invoke($5, `i64.store`, []);


assert_return(() => invoke($5, `i64.load`, []), [value("i64", 9222246136947933185n)]);


assert_return(
  () => invoke($5, `f64.load`, []),
  [bytes("f64", [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0xfc, 0x7f])],
);
