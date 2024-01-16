


function testFancyZeroOffset(fancyZero, memType = 'i32') {
    try {
        const { mem } = wasmEvalText(`(module
            (memory (export "mem") ${memType} 1)
            (data (offset ${fancyZero}) "hi")
        )`).exports;
        const str = String.fromCharCode(...new Uint8Array(mem.buffer).slice(0, 2));
        assertEq(str, 'hi');
    } catch (e) {
        const { getOffset } = wasmEvalText(`(module
            (func (export "getOffset") (result ${memType})
                ${fancyZero}
            )
        )`).exports;
        console.log('Computed offset:', getOffset());
        throw e;
    }
}


testFancyZeroOffset('i32.const 0 ' + (
    '(i32.add (i32.const 1)) '
    + '(i32.sub (i32.const 1)) '
).repeat(1000));


{
    let fib = '(i32.const 1)\n'
    let a = 1; let b = 1; let next;
    for (let i = 0; i < 45; i++) {
        fib += `(i32.const ${a})\n`;
        fib += '(i32.add)\n';
        next = a + b;
        a = b;
        b = next;
    }
    fib += `(i32.sub (i32.const ${next}))\n`;
    testFancyZeroOffset(fib);
}


{
    let val = 837799; 
    let expr = `(i32.const ${val})\n`;
    while (val != 1) {
        if (val % 2 == 0) {
            expr += `(i32.sub (i32.const ${val / 2}))\n`; 
            val /= 2;
        } else {
            expr += `(i32.mul (i32.const 3))\n`;
            expr += `(i32.add (i32.const 1))\n`;
            val = val * 3 + 1;
        }
    }
    expr += `(i32.sub (i32.const 1))\n`;
    testFancyZeroOffset(expr);
}


if (wasmMemory64Enabled()) {
    let val = 1899148184679; 
    let expr = `(i64.const ${val})\n`;
    while (val != 1) {
        if (val % 2 == 0) {
            expr += `(i64.sub (i64.const ${val / 2}))\n`; 
            val /= 2;
        } else {
            expr += `(i64.mul (i64.const 3))\n`;
            expr += `(i64.add (i64.const 1))\n`;
            val = val * 3 + 1;
        }
    }
    expr += `(i64.sub (i64.const 1))\n`;
    testFancyZeroOffset(expr, 'i64');
}
