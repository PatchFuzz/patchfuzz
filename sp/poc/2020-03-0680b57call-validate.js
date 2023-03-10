print(`
  (module
    (func (result i32 i32)
      (i32.const 32)
      (i32.const 10)))`);

print(`
  (module
    (type $t (func (result i32 i32)))
    (func (type $t)
      (i32.const 32)
      (i32.const 10)))`);

print(`
  (module
    (func (result i32 i32)
      (block (result i32 i32)
        (i32.const 32)
        (i32.const 10))))`);

print(`
  (module
    (func $return-2 (result i32 i32)
      (i32.const 32)
      (i32.const 10))
    (func $tail-call (result i32 i32)
      (call 0)))`);

print(`
  (module
    (func $return-2 (result i32 i32)
      (i32.const 32)
      (i32.const 10))
    (func $add (result i32)
      (call 0)
      i32.add))`);

print(`
  (module
    (func $return-2 (param i32 i32) (result i32 i32)
      (local.get 0)
      (local.get 1))
    (func (export "run") (result i32)
      (i32.const 32)
      (i32.const 10)
      (call 0)
      i32.add))`);
