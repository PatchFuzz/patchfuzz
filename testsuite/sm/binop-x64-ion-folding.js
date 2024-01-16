

























function test(ty, wasm_insn, must_appear, param0, param1, expected_result,
              options = {}) {
    let t =
        `(module
           (func (export "f") (param ${ty}) (param ${ty}) (result ${ty})
             ${wasm_insn}
        ))`;
    options.instanceBox = {value: null};
    codegenTestX64_adhoc(t, "f", must_appear, options);
    let ins = options.instanceBox.value;
    assertEq(ins.exports.f(param0, param1), expected_result);
}

function test32(wasm_insn, must_appear, param0, param1, expected_result,
                options) {
    return test('i32', wasm_insn, must_appear, param0, param1, expected_result,
                options);
}

function test64(wasm_insn, must_appear, param0, param1, expected_result,
                options) {
    return test('i64', wasm_insn, must_appear, param0, param1, expected_result,
               options);
}



test32('(i32.and (i32.const 0x12345678) (i32.const 0x0f0f0f0f))',
       'b8 08 06 04 02   mov \\$0x2040608, %eax',
       0,0, 0x2040608);
test64('(i64.and (i64.const 0x1234567851505150) (i64.const 0x515051500f0f0f0f))',
       '48 b8 00 01 00 01 50 50 10 10   mov \\$0x1010505001000100, %rax',
       0n,0n, 0x1010505001000100n);

test32('(i32.or (i32.const 0x12345678) (i32.const 0x0f0e0d0c))',
       'b8 7c 5f 3e 1f   mov \\$0x1F3E5F7C, %eax',
       0,0, 0x1f3e5f7c);
test64('(i64.or (i64.const 0x1234567851505150) (i64.const 0x515051500f0f1337))',
       '48 b8 77 53 5f 5f 78 57 74 53   mov \\$0x537457785F5F5377, %rax',
       0n,0n, 0x537457785f5f5377n);

test32('(i32.xor (i32.const 0x12345678) (i32.const 0x0f0e0d0c))',
       'b8 74 5b 3a 1d   mov \\$0x1D3A5B74, %eax',
       0,0, 0x1d3a5b74);
test64('(i64.xor (i64.const 0x1234567851505150) (i64.const 0x515051500f0f1337))',
       '48 b8 67 42 5f 5e 28 07 64 43   mov \\$0x436407285E5F4267, %rax',
       0n,0n, 0x436407285e5f4267n);



test32('(i32.and (i32.const 0) (get_local 1))',
       '33 c0   xor %eax, %eax',
       1234,5678, 0);
test64('(i64.and (i64.const 0) (get_local 1))',
       '33 c0   xor %eax, %eax',
       1234n,5678n, 0n);

test32('(i32.or (i32.const 0) (get_local 1))',
       `8b ..   mov %e.., %ecx
        8b c1   mov %ecx, %eax`,
       1234,5678, 5678);
test64('(i64.or (i64.const 0) (get_local 1))',
       `48 8b ..   mov %r.., %rcx
        48 8b c1   mov %rcx, %rax`,
       1234n,5678n, 5678n);

test32('(i32.xor (i32.const 0) (get_local 1))',
       `8b ..   mov %e.., %ecx
        8b c1   mov %ecx, %eax`,
       1234,5678, 5678);
test64('(i64.xor (i64.const 0) (get_local 1))',
       `48 8b ..   mov %r.., %rcx
        48 8b c1   mov %rcx, %rax`,
       1234n,5678n, 5678n);



test32('(i32.and (get_local 0) (i32.const 0))',
       '33 c0   xor %eax, %eax',
       1234,5678, 0);
test64('(i64.and (get_local 0) (i64.const 0))',
       '33 c0   xor %eax, %eax',
       1234n,5678n, 0n);

test32('(i32.or (get_local 0) (i32.const 0))',
     
       `8b c1   mov %ecx, %eax`,
       1234,5678, 1234, {no_prefix: true}); 
test64('(i64.or (get_local 0) (i64.const 0))',
     
       `48 8b c1   mov %rcx, %rax`,
       1234n,5678n, 1234n, {no_prefix: true});

test32('(i32.xor (get_local 0) (i32.const 0))',
     
       `8b c1   mov %ecx, %eax`,
       1234,5678, 1234, {no_prefix: true});
test64('(i64.xor (get_local 0) (i64.const 0))',
     
       `48 8b c1   mov %rcx, %rax`,
       1234n,5678n, 1234n, {no_prefix: true});



test32('(i32.and (i32.const 0xffffffff) (get_local 1))',
       `8b ..   mov %e.., %ecx
        8b c1   mov %ecx, %eax`,
       1234,5678, 5678);
test64('(i64.and (i64.const 0xffffffffffffffff) (get_local 1))',
       `48 8b ..   mov %r.., %rcx
        48 8b c1   mov %rcx, %rax`,
       1234n,5678n, 5678n);

test32('(i32.or (i32.const 0xffffffff) (get_local 1))',
       'b8 ff ff ff ff   mov \\$-0x01, %eax',
       1234,5678, -1);
test64('(i64.or (i64.const 0xffffffffffffffff) (get_local 1))',
       '48 c7 c0 ff ff ff ff   mov \\$-0x01, %rax',
       1234n,5678n, -1n);

test32('(i32.xor (i32.const 0xffffffff) (get_local 1))',
       `8b ..   mov %e.., %ecx
        8b c1   mov %ecx, %eax
        f7 d0   not %eax`,
       1234,5678, -5679);
test64('(i64.xor (i64.const 0xffffffffffffffff) (get_local 1))',
       `48 8b ..   mov %r.., %rcx
        48 8b c1   mov %rcx, %rax
        48 f7 d0   not %rax`,
       1234n,5678n, -5679n);



test32('(i32.and (get_local 0) (i32.const 0xffffffff))',
     
       `8b c1   mov %ecx, %eax`,
       1234,5678, 1234, {no_prefix: true}); 
test64('(i64.and (get_local 0) (i64.const 0xffffffffffffffff))',
     
       `48 8b c1   mov %rcx, %rax`,
       1234n,5678n, 1234n, {no_prefix: true});

test32('(i32.or (get_local 0) (i32.const 0xffffffff))',
       'b8 ff ff ff ff   mov \\$-0x01, %eax',
       1234,5678, -1);
test64('(i64.or (get_local 0) (i64.const 0xffffffffffffffff))',
       '48 c7 c0 ff ff ff ff   mov \\$-0x01, %rax',
       1234n,5678n, -1n);

test32('(i32.xor (get_local 0) (i32.const 0xffffffff))',
     
       `8b c1   mov %ecx, %eax
        f7 d0   not %eax`,
       1234,5678, -1235, {no_prefix: true});
test64('(i64.xor (get_local 0) (i64.const 0xffffffffffffffff))',
     
       `48 8b c1   mov %rcx, %rax
        48 f7 d0   not %rax`,
       1234n,5678n, -1235n, {no_prefix: true});



test32('(i32.and (get_local 0) (get_local 0))',
     
       `8b c1   mov %ecx, %eax`,
       1234,5678, 1234, {no_prefix: true});
test64('(i64.and (get_local 0) (get_local 0))',
     
       `48 8b c1   mov %rcx, %rax`,
       1234n,5678n, 1234n, {no_prefix: true});

test32('(i32.or (get_local 0) (get_local 0))',
     
       `8b c1   mov %ecx, %eax`,
       1234,5678, 1234, {no_prefix: true});
test64('(i64.or (get_local 0) (get_local 0))',
     
       `48 8b c1   mov %rcx, %rax`,
       1234n,5678n, 1234n, {no_prefix: true});

test32('(i32.xor (get_local 0) (get_local 0))',
       '33 c0   xor %eax, %eax',
       1234,5678, 0);
test64('(i64.xor (get_local 0) (get_local 0))',
       '33 c0   xor %eax, %eax',
       1234n,5678n, 0n);
