

let { plusOne } = print(`(module
  (; forward declaration so that ref.func works ;)
  (elem declare $plusOneRef)
  (type $t (func (param i32) (result i32)))

  (func $plusOneRef (param i32) (result i32)
    (i32.add
      local.get 0
      i32.const 1)
  )

  (func (export "plusOne") (param i32) (result i32)
    local.get 0
    ref.func $plusOneRef
    call_ref $t
  )
)`).exports;

print(plusOne(3), 4);


print(`(module
  (type $t (func (param i32)))
  (func (param $a i32)
    local.get $a
    call_ref $t
  )
)`, /type mismatch: expression has type i32 but expected \(ref null \d+\)/);

print(`(module
  (type $t (func (param externref)))
  (func (param $a (ref extern))
    local.get $a
    call_ref $t
  )
)`, /type mismatch: expression has type \(ref extern\) but expected \(ref null \d+\)/);


print(`(module
  (type $t (func (param i32) (result i32)))
  (func (param funcref)
    local.get 0
    call_ref $t
  )
)`, /type mismatch: expression has type funcref but expected \(ref null \d+\)/);  
  

print(`(module
  (type $t (func (param i32) (result i32)))
  (elem declare $plusOneRef)
  (func $plusOneRef (param f32) (result f32)
    (f32.add
      local.get 0
      f32.const 1.0)
  )

  (func (export "plusOne") (param i32) (result i32)
    local.get 0
    ref.func $plusOneRef
    call_ref $t
  )
)`, /type mismatch: expression has type \(ref \d+\) but expected \(ref null \d+\)/);


let { loadInt } = print(`(module
  (memory 1 1)
  (data (i32.const 0) "\\04\\00\\00\\00")
  (func (export "loadInt") (result i32)
    i32.const 0
    i32.load offset=0
  )
)`).exports;

let { callLoadInt } = print(`(module
  (type $t (func (result i32)))
  (elem declare 0)
  (import "" "loadInt" (func (result i32)))
  (func (export "callLoadInt") (result i32)
    ref.func 0
    call_ref $t
  )
)`, {"": { loadInt, }}).exports;

print(loadInt(), 4);
print(callLoadInt(), 4);


print(function() {
  let { nullCall } = print(`(module
    (type $t (func (param i32) (result i32)))
    (func (export "nullCall") (param i32) (result i32)
      local.get 0
      ref.null $t
      call_ref $t
    )
  )`).exports;
  nullCall(3);
}, WebAssembly.RuntimeError, /dereferencing null pointer/);
