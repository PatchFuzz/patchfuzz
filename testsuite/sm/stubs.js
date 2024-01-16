

(function testImportJitExit() {
  let options = getJitCompilerOptions();
  if (!options["baseline.enable"]) return;

  let baselineTrigger = options["baseline.warmup.trigger"];

  let valueToConvert = 0;
  function ffi(n) {
    if (n == 1337n) {
      return BigInt(valueToConvert);
    }
    return 42n;
  }

  
  
  
  
  function ffi2(n, x1, x2, x3, x4, x5, x6) {
    return (
      42n +
      BigInt(x1) +
      BigInt(x2) +
      BigInt(x3) +
      BigInt(x4) +
      BigInt(x5) +
      BigInt(x6)
    );
  }

  
  function ffi3(n1, n2, n3, n4) {
    return n3;
  }

  
  for (let i = baselineTrigger + 1; i-- > 0; ) {
    ffi(BigInt(i));
    ffi2(BigInt(i), i, i, i, i, i, i);
    ffi3(BigInt(i), BigInt(i), BigInt(i), BigInt(i));
  }

  let imports = {
    a: {
      ffi,
      ffi2,
      ffi3,
    },
  };

  ex = wasmEvalText(
    `(module
        (import "a" "ffi" (func $ffi (param i64) (result i64)))
        (import "a" "ffi2" (func $ffi2
          (param i64 i32 i32 i32 i32 i32 i32)
          (result i64)))
        (import "a" "ffi3" (func $ffi3 (param i64 i64 i64 i64) (result i64)))

        (func (export "callffi") (param i64) (result i64)
         local.get 0
         call $ffi
        )

        (func (export "callffi2") (param i32 i64) (result i64)
         local.get 1
         local.get 0
         local.get 0
         local.get 0
         local.get 0
         local.get 0
         local.get 0
         call $ffi2
        )

        (func (export "callffi3") (param i64 i64 i64 i64) (result i64)
          local.get 0
          local.get 1
          local.get 2
          local.get 3
          call $ffi3
        )
    )`,
    imports
  ).exports;

  
  assertEq(ex.callffi(0n), 42n);
  assertEq(ex.callffi2(2, 0n), 54n);
  assertEq(ex.callffi3(0n, 1n, 2n, 3n), 2n);

  
  assertEq(ex.callffi(0n), 42n);
  assertEq(ex.callffi(1337n), 0n);
  assertEq(ex.callffi2(2, 0n), 54n);
  assertEq(ex.callffi3(0n, 1n, 2n, 3n), 2n);

  
  
  if (this.gczeal) {
    this.gczeal(2, 1); 
  }
  for (let i = 0; i < 1000; i++) {
    assertEq(ex.callffi3(0n, 1n, 2n, 3n), 2n);
  }
})();


(function testJitEntry() {
  let options = getJitCompilerOptions();
  if (!options["baseline.enable"]) return;

  let baselineTrigger = options["baseline.warmup.trigger"];

  i = wasmEvalText(
    `(module
      (func (export "foo") (param i64) (result i64)
       local.get 0
       i64.const 1
       i64.add
       return
      )
  )`,
    {}
  ).exports;

  function caller(n) {
    return i.foo(42n);
  }

  
  for (let i = baselineTrigger + 1; i-- > 0; ) {
    caller(i);
  }

  
  assertEq(caller(0), 43n);

  
  assertEq(caller(0), 43n);
})();
