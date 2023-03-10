



let { exports: { make, ref_eq, ref_eq_for_control } } = print(`(module
    (type $s (struct))

    (func (export "make") (result eqref) struct.new $s)

    (func (export "ref_eq") (param $a eqref) (param $b eqref) (result i32)
        (ref.eq (local.get $a) (local.get $b)))

    (func (export "ref_eq_for_control") (param $a eqref) (param $b eqref) (result f64)
        (if (result f64) (ref.eq (local.get $a) (local.get $b))
            (f64.const 5.0)
            (f64.const 3.0))))`);

let a = make();
let b = make();

print(ref_eq(null, null), 1);
print(ref_eq(null, a), 0);
print(ref_eq(b, b), 1);
print(ref_eq_for_control(null, null), 5);
print(ref_eq_for_control(null, a), 3);
print(ref_eq_for_control(b, b), 5);

