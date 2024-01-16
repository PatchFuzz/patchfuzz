









function initModule(discardOffset, discardLen, discardViaJS, memType = 'i32') {
    const text = `(module
        (memory (export "memory") ${memType} 4) ;; 4 pages
        (data "abcdefghijklmnopqrstuvwxyz")
        (func (export "init")
            ;; splat alphabet halfway across the 3/4 page boundary.
            ;; 196595 = (65536 * 3) - (26 / 2)
            (memory.init 0 (${memType}.const 196595) (i32.const 0) (i32.const 26))
        )
        (func (export "letter") (param i32) (result i32)
            (i32.load8_u (${memType}.add (${memType}.const 196595) ${memType == 'i64' ? '(i64.extend_i32_u (local.get 0))' : '(local.get 0)'}))
        )
        (func (export "discard")
            (memory.discard (${memType}.const ${discardOffset}) (${memType}.const ${discardLen}))
        )
    )`;
    const exp = wasmEvalText(text).exports;

    return [exp, discardViaJS ? () => exp.memory.discard(discardOffset, discardLen) : exp.discard];
}

function checkRegion(exp, min, max, expectLetters) {
    for (let i = min; i < max; i++) {
        const c = "a".charCodeAt(0) + i;
        const expected = expectLetters ? c : 0;
        assertEq(exp.letter(i), expected, `checking position of letter ${String.fromCharCode(c)}`);
    }
}
function checkFirstHalf(exp, expectLetters) { return checkRegion(exp, 0, 13, expectLetters) }
function checkSecondHalf(exp, expectLetters) { return checkRegion(exp, 13, 26, expectLetters) }
function checkWholeAlphabet(exp, expectLetters) { return checkRegion(exp, 0, 26, expectLetters) }

function testAll(func) {
    func(false, 'i32');
    func(true, 'i32');
    if (wasmMemory64Enabled()) {
        func(false, 'i64');
        func(true, 'i64');
    }
}

testAll(function testHappyPath(discardViaJS, memType) {
    
    const [exp, discard] = initModule(65536 * 2, 65536, discardViaJS, memType);

    
    checkWholeAlphabet(exp, false);

    
    exp.init();
    checkWholeAlphabet(exp, true);

    
    discard();
    checkFirstHalf(exp, false);
    checkSecondHalf(exp, true);

    
    exp.init();
    checkWholeAlphabet(exp, true);

    
    discard();
    checkFirstHalf(exp, false);
    checkSecondHalf(exp, true);
});

testAll(function testZeroLen(discardViaJS) {
    
    const [exp, discard] = initModule(PageSizeInBytes * 2, 0, discardViaJS);

    
    exp.init();
    checkWholeAlphabet(exp, true);

    
    discard();

    
    checkWholeAlphabet(exp, true);
});

testAll(function testWithGrow(discardViaJS, memType) {
    
    
    const [exp, discard] = initModule(65536 * 2, 65536, discardViaJS, memType);

    
    exp.init();
    checkWholeAlphabet(exp, true);

    
    discard();
    checkFirstHalf(exp, false);
    checkSecondHalf(exp, true);

    
    exp.memory.grow(200)

    
    checkFirstHalf(exp, false);
    checkSecondHalf(exp, true);

    
    exp.init();
    checkWholeAlphabet(exp, true);

    
    discard();
    checkFirstHalf(exp, false);
    checkSecondHalf(exp, true);
})

testAll(function testOOB(discardViaJS) {
    
    const [exp, discard] = initModule(PageSizeInBytes * 3, PageSizeInBytes * 2, discardViaJS);

    exp.init();
    checkWholeAlphabet(exp, true);
    assertErrorMessage(() => discard(), WebAssembly.RuntimeError, /out of bounds/);

    
    checkWholeAlphabet(exp, true);
});

testAll(function testOOB2(discardViaJS) {
    
    
    const [exp, discard] = initModule(2 ** 32 - PageSizeInBytes, PageSizeInBytes * 2, discardViaJS);

    exp.init();
    checkWholeAlphabet(exp, true);
    assertErrorMessage(() => discard(), WebAssembly.RuntimeError, /out of bounds/);

    
    checkWholeAlphabet(exp, true);
});

testAll(function testOOB3(discardViaJS) {
    
    const [exp, discard] = initModule(0, 2 ** 32 - PageSizeInBytes, discardViaJS);

    exp.init();
    checkWholeAlphabet(exp, true);
    assertErrorMessage(() => discard(), WebAssembly.RuntimeError, /out of bounds/);

    
    checkWholeAlphabet(exp, true);
});

(function testOOB4() {
    
    
    
    const [exp, _] = initModule(0, 0, false); 
    const discard = () => exp.memory.discard(0, 2 ** 32);

    exp.init();
    checkWholeAlphabet(exp, true);
    assertErrorMessage(() => discard(), WebAssembly.RuntimeError, /out of bounds/);

    
    checkWholeAlphabet(exp, true);
})();

if (wasmMemory64Enabled()) {
    (function testOverflow() {
        
        

        
        const [exp, discard] = initModule(65536 * 3, `18_446_744_073_709_420_544`, false, 'i64');

        
        exp.init();
        checkWholeAlphabet(exp, true);

        
        assertErrorMessage(() => discard(), WebAssembly.RuntimeError, /out of bounds/);

        
        checkWholeAlphabet(exp, true);
    })();
}

testAll(function testMisalignedStart(discardViaJS) {
    
    const [exp, discard] = initModule(PageSizeInBytes * 3 - 13, 13, discardViaJS);

    exp.init();
    checkWholeAlphabet(exp, true);
    assertErrorMessage(() => discard(), WebAssembly.RuntimeError, /unaligned/);

    
    checkWholeAlphabet(exp, true);
});

testAll(function testMisalignedEnd(discardViaJS) {
    
    const [exp, discard] = initModule(PageSizeInBytes * 3, 13, discardViaJS);

    exp.init();
    checkWholeAlphabet(exp, true);
    assertErrorMessage(() => discard(), WebAssembly.RuntimeError, /unaligned/);

    
    checkWholeAlphabet(exp, true);
});
