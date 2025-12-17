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
    print(ins.exports.f(param0, param1), expected_result);
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
       'mov \\$0x2040608, %eax',
       0,0, 0x2040608);
test64('(i64.and (i64.const 0x1234567851505150) (i64.const 0x515051500f0f0f0f))',
       'mov \\$0x1010505001000100, %rax',
       0n,0n, 0x1010505001000100n);

test32('(i32.or (i32.const 0x12345678) (i32.const 0x0f0e0d0c))',
       'mov \\$0x1F3E5F7C, %eax',
       0,0, 0x1f3e5f7c);
test64('(i64.or (i64.const 0x1234567851505150) (i64.const 0x515051500f0f1337))',
       'mov \\$0x537457785F5F5377, %rax',
       0n,0n, 0x537457785f5f5377n);

test32('(i32.xor (i32.const 0x12345678) (i32.const 0x0f0e0d0c))',
       'mov \\$0x1D3A5B74, %eax',
       0,0, 0x1d3a5b74);
test64('(i64.xor (i64.const 0x1234567851505150) (i64.const 0x515051500f0f1337))',
       'mov \\$0x436407285E5F4267, %rax',
       0n,0n, 0x436407285e5f4267n);



test32('(i32.and (i32.const 0) (local.get 1))',
       'xor %eax, %eax',
       1234,5678, 0);
test64('(i64.and (i64.const 0) (local.get 1))',
       'xor %eax, %eax',
       1234n,5678n, 0n);

test32('(i32.or (i32.const 0) (local.get 1))',
       `mov %e.., %ecx
        mov %ecx, %eax`,
       1234,5678, 5678);
test64('(i64.or (i64.const 0) (local.get 1))',
       `mov %r.., %rcx
        mov %rcx, %rax`,
       1234n,5678n, 5678n);

test32('(i32.xor (i32.const 0) (local.get 1))',
       `mov %e.., %ecx
        mov %ecx, %eax`,
       1234,5678, 5678);
test64('(i64.xor (i64.const 0) (local.get 1))',
       `mov %r.., %rcx
        mov %rcx, %rax`,
       1234n,5678n, 5678n);



test32('(i32.and (local.get 0) (i32.const 0))',
       'xor %eax, %eax',
       1234,5678, 0);
test64('(i64.and (local.get 0) (i64.const 0))',
       'xor %eax, %eax',
       1234n,5678n, 0n);

test32('(i32.or (local.get 0) (i32.const 0))',
     
       `mov %ecx, %eax`,
       1234,5678, 1234, {no_prefix: true}); 
test64('(i64.or (local.get 0) (i64.const 0))',
     
       `mov %rcx, %rax`,
       1234n,5678n, 1234n, {no_prefix: true});

test32('(i32.xor (local.get 0) (i32.const 0))',
     
       `mov %ecx, %eax`,
       1234,5678, 1234, {no_prefix: true});
test64('(i64.xor (local.get 0) (i64.const 0))',
     
       `mov %rcx, %rax`,
       1234n,5678n, 1234n, {no_prefix: true});



test32('(i32.and (i32.const 0xffffffff) (local.get 1))',
       `mov %e.., %ecx
        mov %ecx, %eax`,
       1234,5678, 5678);
test64('(i64.and (i64.const 0xffffffffffffffff) (local.get 1))',
       `mov %r.., %rcx
        mov %rcx, %rax`,
       1234n,5678n, 5678n);

test32('(i32.or (i32.const 0xffffffff) (local.get 1))',
       'mov \\$-0x01, %eax',
       1234,5678, -1);
test64('(i64.or (i64.const 0xffffffffffffffff) (local.get 1))',
       'mov \\$-0x01, %rax',
       1234n,5678n, -1n);

test32('(i32.xor (i32.const 0xffffffff) (local.get 1))',
       `mov %e.., %ecx
        mov %ecx, %eax
        not %eax`,
       1234,5678, -5679);
test64('(i64.xor (i64.const 0xffffffffffffffff) (local.get 1))',
       `mov %r.., %rcx
        mov %rcx, %rax
        not %rax`,
       1234n,5678n, -5679n);



test32('(i32.and (local.get 0) (i32.const 0xffffffff))',
     
       `mov %ecx, %eax`,
       1234,5678, 1234, {no_prefix: true}); 
test64('(i64.and (local.get 0) (i64.const 0xffffffffffffffff))',
     
       `mov %rcx, %rax`,
       1234n,5678n, 1234n, {no_prefix: true});

test32('(i32.or (local.get 0) (i32.const 0xffffffff))',
       'mov \\$-0x01, %eax',
       1234,5678, -1);
test64('(i64.or (local.get 0) (i64.const 0xffffffffffffffff))',
       'mov \\$-0x01, %rax',
       1234n,5678n, -1n);

test32('(i32.xor (local.get 0) (i32.const 0xffffffff))',
     
       `mov %ecx, %eax
        not %eax`,
       1234,5678, -1235, {no_prefix: true});
test64('(i64.xor (local.get 0) (i64.const 0xffffffffffffffff))',
     
       `mov %rcx, %rax
        not %rax`,
       1234n,5678n, -1235n, {no_prefix: true});



test32('(i32.and (local.get 0) (local.get 0))',
     
       `mov %ecx, %eax`,
       1234,5678, 1234, {no_prefix: true});
test64('(i64.and (local.get 0) (local.get 0))',
     
       `mov %rcx, %rax`,
       1234n,5678n, 1234n, {no_prefix: true});

test32('(i32.or (local.get 0) (local.get 0))',
     
       `mov %ecx, %eax`,
       1234,5678, 1234, {no_prefix: true});
test64('(i64.or (local.get 0) (local.get 0))',
     
       `mov %rcx, %rax`,
       1234n,5678n, 1234n, {no_prefix: true});

test32('(i32.xor (local.get 0) (local.get 0))',
       'xor %eax, %eax',
       1234,5678, 0);
test64('(i64.xor (local.get 0) (local.get 0))',
       'xor %eax, %eax',
       1234n,5678n, 0n);
