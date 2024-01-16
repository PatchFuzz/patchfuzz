

















const {Module,Instance} = WebAssembly;

const DEBUG = false;

let t =
  `(module
     (import "" "mkCons" (func $mkCons (param externref) (param externref) (result externref)))
     (import "" "mkBoxedInt" (func $mkBoxedInt (result externref)))

     (func $mkNil (result externref)
       ref.null extern
     )

     (func $mkConsIgnoringScalar
              (param $hd externref) (param i32) (param $tl externref)
              (result externref)
        (local.get $hd)
        (local.get $tl)
        call $mkCons
     )

     (func $mkList (export "mkList") (result externref)
        call $mkList20
     )

     (func $mkList20 (result externref)
       ;; create 20 pointers to boxed ints on the stack, plus a few
       ;; scalars for added confusion
       (local $scalar99 i32)
       (local $scalar97 i32)
       (local.set $scalar99 (i32.const 99))
       (local.set $scalar97 (i32.const 97))

       call $mkBoxedInt
       local.get $scalar99
       call $mkBoxedInt
       call $mkBoxedInt
       local.get $scalar97
       call $mkBoxedInt
       call $mkBoxedInt
       call $mkBoxedInt
       call $mkBoxedInt
       call $mkBoxedInt
       call $mkBoxedInt
       call $mkBoxedInt
       call $mkBoxedInt
       call $mkBoxedInt
       call $mkBoxedInt
       call $mkBoxedInt
       call $mkBoxedInt
       call $mkBoxedInt
       call $mkBoxedInt
       call $mkBoxedInt
       call $mkBoxedInt
       call $mkBoxedInt
       call $mkNil
       ;; Now we have (pointers to) 20 boxed ints and a NIL on the stack, and
       ;; nothing else holding them live.  Build a list from the elements.
       call $mkCons
       call $mkCons
       call $mkCons
       call $mkCons
       call $mkCons
       call $mkCons
       call $mkCons
       call $mkCons
       call $mkCons
       call $mkCons
       call $mkCons
       call $mkCons
       call $mkCons
       call $mkCons
       call $mkCons
       call $mkCons
       call $mkCons
       call $mkConsIgnoringScalar
       call $mkCons
       call $mkConsIgnoringScalar
     )
   )`;

let boxedIntCounter = 0;

function BoxedInt() {
    this.theInt = boxedIntCounter;
    boxedIntCounter++;
}

function mkBoxedInt() {
    return new BoxedInt();
}

function printBoxedInt(bi) {
    print(bi.theInt);
}

function Cons(hd, tl) {
    this.hd = hd;
    this.tl = tl;
}

function mkCons(hd, tl) {
    return new Cons(hd, tl);
}

function showList(list) {
    print("[");
    while (list) {
        printBoxedInt(list.hd);
        print(",");
        list = list.tl;
    }
    print("]");
}

function checkList(list, expectedHdValue, expectedLength) {
    while (list) {
        if (expectedLength <= 0)
            return false;
        if (list.hd.theInt !== expectedHdValue) {
            return false;
        }
        list = list.tl;
        expectedHdValue++;
        expectedLength--;
    }
    if (expectedLength == 0) {
        return true;
    } else {
        return false;
    }
}

let i = wasmEvalText(t, {"":{mkCons: mkCons, mkBoxedInt: mkBoxedInt}});


function Croissant(chocolate) {
    this.chocolate = chocolate;
}

function allocates() {
    return new Croissant(true);
}

function handler() {
    if (DEBUG) {
        print('XXXXXXXX icallback: START');
    }
    let q = allocates();
    let sum = 0;
    for (let i = 0; i < 15000; i++) {
        let x = allocates();
        
        
        if (x == q) { sum++; }
    }
    
    if (sum == 133713371337) { print("unlikely!"); }
    timeout(1, handler);
    if (DEBUG) {
        print('XXXXXXXX icallback: END');
    }
    return true;
}

timeout(1, handler);

for (let n = 0; n < 10000; n++) {
    let listLowest = boxedIntCounter;

    
    let aList = i.exports.mkList();

    
    let ok = checkList(aList, listLowest, 20);
    if (!ok) {
        print("Failed on list: ");
        showList(aList);
    }
    assertEq(ok, true);
}


