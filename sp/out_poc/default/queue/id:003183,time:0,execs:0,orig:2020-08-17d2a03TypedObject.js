



{
    let ins = print(`(module
                             (type $p (struct (field f64) (field (mut i32))))

                             (func (export "mkp") (result eqref)
                              (struct.new $p (f64.const 1.5) (i32.const 33))))`).exports;

    let p = ins.mkp();
    print(p[0], 1.5);
    print(p[1], 33);
    print(p[2], undefined);
}



{
    let ins = print(`(module
                             (type $p (struct (field f64)))

                             (func (export "mkp") (result eqref)
                              (struct.new $p (f64.const 1.5))))`).exports;

    let p = ins.mkp();
    print(() => p[0] = 5.7,
                       Error,
                       /setting immutable field/);
}



{
    let ins = print(`(module
                             (type $q (struct (field (mut f64))))
                             (type $p (struct (field (mut (ref null $q)))))

                             (type $r (struct (field (mut eqref))))

                             (func (export "mkp") (result eqref)
                              (struct.new $p (ref.null $q)))

                             (func (export "mkr") (result eqref)
                              (struct.new $r (ref.null eq))))`).exports;

    print(Object.getPrototypeOf(ins.mkp()), null);
    print(Object.getPrototypeOf(ins.mkr()), null);
}



{
    let ins = print(`(module
                             (type $q (struct (field (mut f64))))
                             (type $p (struct (field (mut (ref null $q))) (field (mut eqref))))

                             (func (export "mkq") (result eqref)
                              (struct.new $q (f64.const 1.5)))

                             (func (export "mkp") (result eqref)
                              (struct.new $p (ref.null $q) (ref.null eq))))`).exports;
    let q = ins.mkq();
    print(typeof q, "object");
    print(q[0], 1.5);

    let p = ins.mkp();
    print(typeof p, "object");
    print(p[0], null);

    print(() => { p[0] = q },
                       Error,
                       /setting immutable field/);

    print(() => { p[1] = q },
                       Error,
                       /setting immutable field/);
}




{
    let ins = print(`(module
                             (type $p (struct (field (mut i64))))
                             (func (export "mkp") (result eqref)
                              (struct.new $p (i64.const 0x1234567887654321))))`).exports;

    let p = ins.mkp();
    print(typeof p, "object");
    print(p[0], 0x1234567887654321n)

    print(() => { p[0] = 0 },
                       Error,
                       /setting immutable field/);
}




{
    let ins = print(
        `(module
          (type $p (struct (field i64)))
          (type $q (struct (field i32) (field i32)))
          (func $f (param eqref) (result i32)
           local.get 0
           ref.test $q
          )
          (func $g (param eqref) (result i32)
           local.get 0
           ref.test $p
          )
          (func (export "t1") (result i32)
           (call $f (struct.new $p (i64.const 0))))
          (func (export "t2") (result i32)
           (call $g (struct.new $q (i32.const 0) (i32.const 0)))))`).exports;
    print(ins.t1(), 0);
    print(ins.t2(), 0);
}
