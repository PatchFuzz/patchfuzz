




























for (let v of WasmExternrefValues)
{
    let ins = wasmEvalText(
        `(module
           (type $S (struct (field $S.x (mut externref))))
           (func (export "make") (param $v externref) (result eqref)
             (struct.new $S (local.get $v))))`);
    let x = ins.exports.make(v);
    assertEq(x[0], v);
}



{
    let fields = iota(10).map(() => `(field externref)`).join(' ');
    let params = iota(10).map((i) => `(param $${i} externref)`).join(' ');
    let args = iota(10).map((i) => `(local.get $${i})`).join(' ');
    let txt = `(module
                 (type $S (struct ${fields}))
                 (func (export "make") ${params} (result eqref)
                   (struct.new $S ${args})))`;
    let ins = wasmEvalText(txt);
    let x = ins.exports.make({x:0}, {x:1}, {x:2}, {x:3}, {x:4}, {x:5}, {x:6}, {x:7}, {x:8}, {x:9})
    gc('shrinking');
    assertEq(typeof x[0], "object");
    assertEq(x[0].x, 0);
    assertEq(typeof x[1], "object");
    assertEq(x[1].x, 1);
    assertEq(typeof x[2], "object");
    assertEq(x[2].x, 2);
    assertEq(typeof x[3], "object");
    assertEq(x[3].x, 3);
    assertEq(typeof x[4], "object");
    assertEq(x[4].x, 4);
    assertEq(typeof x[5], "object");
    assertEq(x[5].x, 5);
    assertEq(typeof x[6], "object");
    assertEq(x[6].x, 6);
    assertEq(typeof x[7], "object");
    assertEq(x[7].x, 7);
    assertEq(typeof x[8], "object");
    assertEq(x[8].x, 8);
    assertEq(typeof x[9], "object");
    assertEq(x[9].x, 9);
}
