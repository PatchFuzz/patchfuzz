





















const {Module,Instance} = WebAssembly;

const DEBUG = false;

let t =
  `(module
     (type $typeOfFn0
           (func (param i32) (param externref) (param i32)
                 (param externref) (param externref) (param i32) (result i32)))

     (import "" "alloc" (func $alloc (result externref)))
     (import "" "quitp" (func $quitp (result i32)))
     (import "" "check3" (func $check3 (param externref) (param externref) (param externref)))

     (table 1 1 funcref)
     (elem (i32.const 0) $fn0)

     ;; -- fn 0
     (func $fn0 (export "fn0")
                 (param $arg1 i32) (param $arg2 externref) (param $arg3 i32)
                 (param $arg4 externref) (param $arg5 externref) (param $arg6 i32) (result i32)
       (local $i i32)

       ;; spinloop to waste time
       (loop
         (local.set $i (i32.add (local.get $i) (i32.const 1)))
         (br_if 0 (i32.lt_s (local.get $i) (i32.const 100)))
       )

       (i32.add (i32.add (local.get $arg1) (local.get $arg3)) (local.get $arg6))

       ;; Poke the ref-typed arguments, to be sure that they got kept alive
       ;; properly across any GC that might have happened.
       (call $check3 (local.get $arg2) (local.get $arg4) (local.get $arg5))
     )

     ;; -- fn 1
     (func $fn1 (export "fn1") (param $arg1 externref) (result i32)
       (loop (result i32)
         ;; call direct to $fn0
         (call $fn0 (i32.const 10) (local.get $arg1) (i32.const 12)
                    (local.get $arg1) (local.get $arg1) (i32.const 15))

         ;; call indirect to table index 0, which is $fn0
         (call_indirect (type $typeOfFn0)
                    (i32.const 10) (local.get $arg1) (i32.const 12)
                    (local.get $arg1) (local.get $arg1) (i32.const 15)
                    (i32.const 0)) ;; table index

         i32.add

         ;; Continue iterating until handler() has allocated enough
         (br_if 0 (i32.eq (call $quitp) (i32.const 0)))
       )
     )

     ;; -- fn 2
     (func $fn2 (export "fn2") (param $arg1 externref) (result i32)
       (call $fn1 (local.get $arg1))
     )
   )`;

function Croissant(chocolate, number) {
    this.chocolate = chocolate;
    this.number = number;
}

function allocates() {
    return new Croissant(true, 271828);
}

let totAllocs = 0;

function handler() {
    if (DEBUG) {
        print('XXXXXXXX icallback: START');
    }
    let q = allocates();
    let sum = 0;
    let iters = 15000;
    for (let i = 0; i < iters; i++) {
        let x = allocates();
        
        
        if (x == q) { sum++; }
    }
    totAllocs += iters;
    
    if (sum == 133713371337) { print("unlikely!"); }
    timeout(0.5, handler);
    if (DEBUG) {
        print('XXXXXXXX icallback: END');
    }
    return true;
}

function quitp() {
    return totAllocs > 200000 ? 1 : 0;
}

function check3(a1, a2, a3) {
    assertEq(a1.number, 31415927);
    assertEq(a2.number, 31415927);
    assertEq(a3.number, 31415927);
}

let i = wasmEvalText(t, {"":{alloc: allocates, quitp: quitp, check3: check3}});

timeout(0.5, handler);
print(i.exports.fn2( new Croissant(false, 31415927) ));
