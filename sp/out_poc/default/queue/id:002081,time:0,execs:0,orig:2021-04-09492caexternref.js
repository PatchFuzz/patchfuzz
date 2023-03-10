
function Baguette(calories) {
    this.calories = calories;
}



const { validate, CompileError } = WebAssembly;

print(() => print(`(module
    (func (result externref)
        i32.const 42
    )
)`), CompileError, mismatchError('i32', 'externref'));

print(() => print(`(module
    (func (result externref)
        i32.const 0
        ref.null extern
        i32.const 42
        select (result externref)
    )
)`), CompileError, /type mismatch/);

print(() => print(`(module
    (func (result i32)
        ref.null extern
        if
            i32.const 42
        end
    )
)`), CompileError, mismatchError('externref', 'i32'));




let simpleTests = [
    "(module (func (drop (ref.null extern))))",
    "(module (func $test (local externref)))",
    "(module (func $test (param externref)))",
    "(module (func $test (result externref) (ref.null extern)))",
    "(module (func $test (block (result externref) (unreachable)) unreachable))",
    "(module (func $test (result i32) (local externref) (ref.is_null (local.get 0))))",
    `(module (import "a" "b" (func (param externref))))`,
    `(module (import "a" "b" (func (result externref))))`,
    `(module (global externref (ref.null extern)))`,
    `(module (global (mut externref) (ref.null extern)))`,
];

for (let src of simpleTests) {
    print(src, {a:{b(){}}});
    print(validate(print(src)), true);
}



let { exports } = print(`(module
    (func (export "is_null") (result i32)
        ref.null extern
        ref.is_null
    )

    (func $sum (param i32) (result i32)
        local.get 0
        i32.const 42
        i32.add
    )

    (func (export "is_null_spill") (result i32)
        ref.null extern
        i32.const 58
        call $sum
        drop
        ref.is_null
    )

    (func (export "is_null_local") (result i32) (local externref)
        ref.null extern
        local.set 0
        i32.const 58
        call $sum
        drop
        local.get 0
        ref.is_null
    )
    )`);

print(exports.is_null(), 1);
print(exports.is_null_spill(), 1);
print(exports.is_null_local(), 1);



exports = print(`(module
    (func (export "is_null") (param $ref externref) (result i32)
        local.get $ref
        ref.is_null
    )

    (func (export "ref_or_null") (param $ref externref) (param $selector i32) (result externref)
        local.get $ref
        ref.null extern
        local.get $selector
        select (result externref)
    )

    (func $recursive (export "nested") (param $ref externref) (param $i i32) (result externref)
        ;; i == 10 => ret $ref
        local.get $i
        i32.const 10
        i32.eq
        if
            local.get $ref
            return
        end

        local.get $ref

        local.get $i
        i32.const 1
        i32.add

        call $recursive
    )
)`).exports;

print(exports.is_null(undefined), 0);
print(exports.is_null(null), 1);
print(exports.is_null({}), 0);
print(exports.is_null("hi"), 0);
print(exports.is_null(3), 0);
print(exports.is_null(3.5), 0);
print(exports.is_null(true), 0);
print(exports.is_null(Symbol("croissant")), 0);
print(exports.is_null(new Baguette(100)), 0);

let baguette = new Baguette(42);
print(exports.ref_or_null(null, 0), null);
print(exports.ref_or_null(baguette, 0), null);

let ref = exports.ref_or_null(baguette, 1);
print(ref, baguette);
print(ref.calories, baguette.calories);

ref = exports.nested(baguette, 0);
print(ref, baguette);
print(ref.calories, baguette.calories);


(function() {
    print(print(`(module
    (memory 0 64)
    (func (export "f") (param externref) (result i32)
        i32.const 10
        memory.grow
        drop
        memory.size
    )
)`).exports.f({}), 10);
})();



function assertJoin(body) {
    let val = { i: -1 };
    print(print(`(module
        (func (export "test") (param $ref externref) (param $i i32) (result externref)
            ${body}
        )
    )`).exports.test(val), val);
    print(val.i, -1);
}

assertJoin("(block (result externref) local.get $ref)");
assertJoin("(block $out (result externref) local.get $ref br $out)");
assertJoin("(loop (result externref) local.get $ref)");

assertJoin(`(block $out (result externref) (loop $top (result externref)
    local.get $i
    i32.const 1
    i32.add
    tee_local $i
    i32.const 10
    i32.eq
    if
        local.get $ref
        return
    end
    br $top))
`);

assertJoin(`(block $out (loop $top
    local.get $i
    i32.const 1
    i32.add
    tee_local $i
    i32.const 10
    i32.le_s
    if
        br $top
    else
        local.get $ref
        return
    end
    )) unreachable
`);

assertJoin(`(block $out (result externref) (loop $top
    local.get $ref
    local.get $i
    i32.const 1
    i32.add
    tee_local $i
    i32.const 10
    i32.eq
    br_if $out
    br $top
    ) unreachable)
`);

assertJoin(`(block $out (result externref) (block $unreachable (result externref) (loop $top
    local.get $ref
    local.get $i
    i32.const 1
    i32.add
    tee_local $i
    br_table $unreachable $out
    ) unreachable))
`);

let x = { i: 42 }, y = { f: 53 };
exports = print(`(module
    (func (export "test") (param $lhs externref) (param $rhs externref) (param $i i32) (result externref)
        local.get $lhs
        local.get $rhs
        local.get $i
        select (result externref)
    )
)`).exports;

let result = exports.test(x, y, 0);
print(result, y);
print(result.i, undefined);
print(result.f, 53);
print(x.i, 42);

result = exports.test(x, y, 1);
print(result, x);
print(result.i, 42);
print(result.f, undefined);
print(y.f, 53);



let firstBaguette = new Baguette(13),
    secondBaguette = new Baguette(37);

let imports = {
    i: 0,
    myBaguette: null,
    funcs: {
        param(x) {
            if (this.i === 0) {
                print(x, firstBaguette);
                print(x.calories, 13);
                print(secondBaguette !== null, true);
            } else if (this.i === 1 || this.i === 2) {
                print(x, secondBaguette);
                print(x.calories, 37);
                print(firstBaguette !== null, true);
            } else if (this.i === 3) {
                print(x, null);
            } else {
                firstBaguette = null;
                secondBaguette = null;
                gc(); 
            }
            this.i++;
        },
        ret() {
            return imports.myBaguette;
        }
    }
};

exports = print(`(module
    (import "funcs" "ret" (func $ret (result externref)))
    (import "funcs" "param" (func $param (param externref)))

    (func (export "param") (param $x externref) (param $y externref)
        local.get $y
        local.get $x
        call $param
        call $param
    )

    (func (export "ret") (result externref)
        call $ret
    )
)`, imports).exports;

exports.param(firstBaguette, secondBaguette);
exports.param(secondBaguette, null);
exports.param(firstBaguette, secondBaguette);

imports.myBaguette = null;
print(exports.ret(), null);

imports.myBaguette = new Baguette(1337);
print(exports.ret(), imports.myBaguette);



exports = print(`(module
    (import "funcs" "mirror" (func $mirror (param externref) (result externref)))
    (import "funcs" "augment" (func $augment (param externref) (result externref)))

    (global $count_f (mut i32) (i32.const 0))
    (global $count_g (mut i32) (i32.const 0))

    (func $f (param $param externref) (result externref)
        i32.const 1
        global.get $count_f
        i32.add
        global.set $count_f

        local.get $param
        call $augment
    )

    (func $g (param $param externref) (result externref)
        i32.const 1
        global.get $count_g
        i32.add
        global.set $count_g

        local.get $param
        call $mirror
    )

    (table (export "table") 10 funcref)
    (elem (i32.const 0) $f $g $mirror $augment)
    (type $table_type (func (param externref) (result externref)))

    (func (export "call_indirect") (param $i i32) (param $ref externref) (result externref)
        local.get $ref
        local.get $i
        call_indirect (type $table_type)
    )

    (func (export "count_f") (result i32) global.get $count_f)
    (func (export "count_g") (result i32) global.get $count_g)
)`, {
    funcs: {
        mirror(x) {
            return x;
        },
        augment(x) {
            x.i++;
            x.newProp = "hello";
            return x;
        }
    }
}).exports;

x = { i: 19 };
print(exports.table.get(0)(x), x);
print(x.i, 20);
print(x.newProp, "hello");
print(exports.count_f(), 1);
print(exports.count_g(), 0);

x = { i: 21 };
print(exports.table.get(1)(x), x);
print(x.i, 21);
print(typeof x.newProp, "undefined");
print(exports.count_f(), 1);
print(exports.count_g(), 1);

x = { i: 22 };
print(exports.table.get(2)(x), x);
print(x.i, 22);
print(typeof x.newProp, "undefined");
print(exports.count_f(), 1);
print(exports.count_g(), 1);

x = { i: 23 };
print(exports.table.get(3)(x), x);
print(x.i, 24);
print(x.newProp, "hello");
print(exports.count_f(), 1);
print(exports.count_g(), 1);





print(() => print(`(module (global (import "glob" "externref") externref))`, { glob: { externref: new WebAssembly.Global({ value: 'i32' }, 42) } }),
    WebAssembly.LinkError,
    /imported global type mismatch/);

print(() => print(`(module (global (import "glob" "i32") i32))`, { glob: { i32: {} } }),
    WebAssembly.LinkError,
    /import object field 'i32' is not a Number/);

imports = {
    constants: {
        imm_null: null,
        imm_bread: new Baguette(321),
        mut_null: new WebAssembly.Global({ value: "externref", mutable: true }, null),
        mut_bread: new WebAssembly.Global({ value: "externref", mutable: true }, new Baguette(123))
    }
};

exports = print(`(module
    (global $g_imp_imm_null  (import "constants" "imm_null") externref)
    (global $g_imp_imm_bread (import "constants" "imm_bread") externref)

    (global $g_imp_mut_null   (import "constants" "mut_null") (mut externref))
    (global $g_imp_mut_bread  (import "constants" "mut_bread") (mut externref))

    (global $g_imm_null     externref (ref.null extern))
    (global $g_imm_getglob  externref (global.get $g_imp_imm_bread))
    (global $g_mut         (mut externref) (ref.null extern))

    (func (export "imm_null")      (result externref) global.get $g_imm_null)
    (func (export "imm_getglob")   (result externref) global.get $g_imm_getglob)

    (func (export "imp_imm_null")  (result externref) global.get $g_imp_imm_null)
    (func (export "imp_imm_bread") (result externref) global.get $g_imp_imm_bread)
    (func (export "imp_mut_null")  (result externref) global.get $g_imp_mut_null)
    (func (export "imp_mut_bread") (result externref) global.get $g_imp_mut_bread)

    (func (export "set_imp_null")  (param externref) local.get 0 global.set $g_imp_mut_null)
    (func (export "set_imp_bread") (param externref) local.get 0 global.set $g_imp_mut_bread)

    (func (export "set_mut") (param externref) local.get 0 global.set $g_mut)
    (func (export "get_mut") (result externref) global.get $g_mut)
)`, imports).exports;

print(exports.imp_imm_null(), imports.constants.imm_null);
print(exports.imp_imm_bread(), imports.constants.imm_bread);

print(exports.imm_null(), null);
print(exports.imm_getglob(), imports.constants.imm_bread);

print(exports.imp_mut_null(), imports.constants.mut_null.value);
print(exports.imp_mut_bread(), imports.constants.mut_bread.value);

let brandNewBaguette = new Baguette(1000);
exports.set_imp_null(brandNewBaguette);
print(exports.imp_mut_null(), brandNewBaguette);
print(exports.imp_mut_bread(), imports.constants.mut_bread.value);

exports.set_imp_bread(null);
print(exports.imp_mut_null(), brandNewBaguette);
print(exports.imp_mut_bread(), null);

print(exports.get_mut(), null);
let glutenFreeBaguette = new Baguette("calories-free bread");
exports.set_mut(glutenFreeBaguette);
print(exports.get_mut(), glutenFreeBaguette);
print(exports.get_mut().calories, "calories-free bread");


print(
    `(module
       (func
         (return)
         (ref.null extern)
         (drop)
        )
    )`);

print(
    `(module
       (func (param externref)
         (return)
         (ref.is_null (get_local 0))
         (drop)
        )
    )`);
