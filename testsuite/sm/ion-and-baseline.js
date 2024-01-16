













var refmod = new WebAssembly.Module(wasmTextToBinary(
    `(module
      (import "" "tbl" (table $tbl 4 funcref))
      (import "" "print" (func $print (param i32)))

      ;; Just a dummy
      (type $s (struct (field i32)))

      (type $htype (func (param externref)))
      (type $itype (func (result externref)))

      (elem (i32.const 0) $f $g)

      (func $f (param externref)
       (call $print (i32.const 1)))

      (func $g (result externref)
       (call $print (i32.const 2))
       (ref.null extern))

      (func (export "test_h")
       (call_indirect (type $htype) (ref.null extern) (i32.const 2)))

      (func (export "test_i")
       (drop (call_indirect (type $itype) (i32.const 3))))

     )`));

var nonrefmod = new WebAssembly.Module(wasmTextToBinary(
    `(module
      (import "" "tbl" (table $tbl 4 funcref))
      (import "" "print" (func $print (param i32)))

      (type $ftype (func (param i32)))
      (type $gtype (func (result i32)))

      (elem (i32.const 2) $h $i)

      ;; Should fail because of the signature mismatch: parameter
      (func (export "test_f")
       (call_indirect (type $ftype) (i32.const 37) (i32.const 0)))

      ;; Should fail because of the signature mismatch: return value
      (func (export "test_g")
       (drop (call_indirect (type $gtype) (i32.const 1))))

      (func $h (param i32)
       (call $print (i32.const 2)))

      (func $i (result i32)
       (call $print (i32.const 3))
       (i32.const 37))
     )`));

var tbl = new WebAssembly.Table({initial:4, element:"anyfunc"});
var refins = new WebAssembly.Instance(refmod, {"":{print, tbl}}).exports;
var nonrefins = new WebAssembly.Instance(nonrefmod, {"":{print, tbl}}).exports;

assertErrorMessage(() => nonrefins.test_f(),
                   WebAssembly.RuntimeError,
                   /indirect call signature mismatch/);

assertErrorMessage(() => nonrefins.test_g(),
                   WebAssembly.RuntimeError,
                   /indirect call signature mismatch/);

assertErrorMessage(() => refins.test_h(),
                   WebAssembly.RuntimeError,
                   /indirect call signature mismatch/);

assertErrorMessage(() => refins.test_i(),
                   WebAssembly.RuntimeError,
                   /indirect call signature mismatch/);

