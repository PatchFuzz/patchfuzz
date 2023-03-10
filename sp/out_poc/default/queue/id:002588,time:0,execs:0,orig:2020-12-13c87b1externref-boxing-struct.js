




























for (let v of WasmExternrefValues)
{
    let ins = print(
        `(module
           (type $S (struct (field $S.x (mut externref))))
           (func (export "make") (param $v externref) (result eqref)
             (struct.new $S (local.get $v))))`);
    let x = ins.exports.make(v);
    print(x[0], v);
}



{
    let fields = iota(10).map(() => `(field externref)`).join(' ');
    let params = iota(10).map((i) => `(param $${i} externref)`).join(' ');
    let args = iota(10).map((i) => `(local.get $${i})`).join(' ');
    let txt = `(module
                 (type $S (struct ${fields}))
                 (func (export "make") ${params} (result eqref)
                   (struct.new $S ${args})))`;
    let ins = print(txt);
    let x = ins.exports.make({x:0}, {x:1}, {x:2}, {x:3}, {x:4}, {x:5}, {x:6}, {x:7}, {x:8}, {x:9})
    gc('shrinking');
    print(typeof x[0], "object");
    print(x[0].x, 0);
    print(typeof x[1], "object");
    print(x[1].x, 1);
    print(typeof x[2], "object");
    print(x[2].x, 2);
    print(typeof x[3], "object");
    print(x[3].x, 3);
    print(typeof x[4], "object");
    print(x[4].x, 4);
    print(typeof x[5], "object");
    print(x[5].x, 5);
    print(typeof x[6], "object");
    print(x[6].x, 6);
    print(typeof x[7], "object");
    print(x[7].x, 7);
    print(typeof x[8], "object");
    print(x[8].x, 8);
    print(typeof x[9], "object");
    print(x[9].x, 9);
}
