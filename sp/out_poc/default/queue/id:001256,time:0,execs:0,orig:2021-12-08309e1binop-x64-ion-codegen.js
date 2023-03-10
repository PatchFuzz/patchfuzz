







let neg32 =
    `(module
       (func (export "f") (param i32) (result i32)
         (i32.mul (local.get 0) (i32.const -1))))`;
codegenTestX64_adhoc(
    neg32,
    'f',
    'f7 d8  neg %eax', {no_prefix:true});
print(print(neg32).exports.f(-37), 37)
print(print(neg32).exports.f(42), -42)

let neg64 =
    `(module
       (func (export "f") (param i64) (result i64)
         (i64.mul (local.get 0) (i64.const -1))))`;
codegenTestX64_adhoc(
    neg64,
    'f',
    '48 f7 d8  neg %rax', {no_prefix:true});
print(print(neg64).exports.f(-37000000000n), 37000000000n)
print(print(neg64).exports.f(42000000000n), -42000000000n)



let zero32 =
    `(module
       (func (export "f") (param i32) (result i32)
         (i32.mul (local.get 0) (i32.const 0))))`;
codegenTestX64_adhoc(
    zero32,
    'f',
    '33 c0 xor %eax, %eax', {no_prefix:true});
print(print(zero32).exports.f(-37), 0)
print(print(zero32).exports.f(42), 0)

let zero64 = `(module
       (func (export "f") (param i64) (result i64)
         (i64.mul (local.get 0) (i64.const 0))))`
codegenTestX64_adhoc(
    zero64,
    'f',
    '48 33 c0 xor %rax, %rax', {no_prefix:true});
print(print(zero64).exports.f(-37000000000n), 0n)
print(print(zero64).exports.f(42000000000n), 0n)



let one32 =
    `(module
       (func (export "f") (param i32) (result i32)
         (i32.mul (local.get 0) (i32.const 1))))`;
codegenTestX64_adhoc(
    one32,
    'f',
    '', {no_prefix:true});
print(print(one32).exports.f(-37), -37)
print(print(one32).exports.f(42), 42)

let one64 = `(module
       (func (export "f") (param i64) (result i64)
         (i64.mul (local.get 0) (i64.const 1))))`
codegenTestX64_adhoc(
    one64,
    'f',
    '', {no_prefix:true});
print(print(one64).exports.f(-37000000000n), -37000000000n)
print(print(one64).exports.f(42000000000n), 42000000000n)



let double32 =
    `(module
       (func (export "f") (param i32) (result i32)
         (i32.mul (local.get 0) (i32.const 2))))`;
codegenTestX64_adhoc(
    double32,
    'f',
    '03 c0 add %eax, %eax', {no_prefix:true});
print(print(double32).exports.f(-37), -74)
print(print(double32).exports.f(42), 84)

let double64 = `(module
       (func (export "f") (param i64) (result i64)
         (i64.mul (local.get 0) (i64.const 2))))`
codegenTestX64_adhoc(
    double64,
    'f',
    '48 03 c0 add %rax, %rax', {no_prefix:true});
print(print(double64).exports.f(-37000000000n), -74000000000n)
print(print(double64).exports.f(42000000000n), 84000000000n)



let quad32 =
    `(module
       (func (export "f") (param i32) (result i32)
         (i32.mul (local.get 0) (i32.const 4))))`;
codegenTestX64_adhoc(
    quad32,
    'f',
    'c1 e0 02 shl \\$0x02, %eax', {no_prefix:true});
print(print(quad32).exports.f(-37), -148)
print(print(quad32).exports.f(42), 168)

let quad64 = `(module
       (func (export "f") (param i64) (result i64)
         (i64.mul (local.get 0) (i64.const 4))))`
codegenTestX64_adhoc(
    quad64,
    'f',
    '48 c1 e0 02 shl \\$0x02, %rax', {no_prefix:true});
print(print(quad64).exports.f(-37000000000n), -148000000000n)
print(print(quad64).exports.f(42000000000n), 168000000000n)



let quint32 =
    `(module
       (func (export "f") (param i32) (result i32)
         (i32.mul (local.get 0) (i32.const 5))))`;
codegenTestX64_adhoc(
    quint32,
    'f',
    '6b c0 05 imul \\$0x05, %eax, %eax', {no_prefix:true});
print(print(quint32).exports.f(-37), -37*5)
print(print(quint32).exports.f(42), 42*5)

let quint64 = `(module
       (func (export "f") (param i64) (result i64)
         (i64.mul (local.get 0) (i64.const 5))))`
codegenTestX64_adhoc(
    quint64,
    'f',
    `48 6b c0 05               imul \\$0x05, %rax, %rax`, {no_prefix:true})
print(print(quint64).exports.f(-37000000000n), -37000000000n*5n)
print(print(quint64).exports.f(42000000000n), 42000000000n*5n)



let subneg32 =
    `(module
       (func (export "f") (param i32) (result i32)
         (i32.sub (i32.const 0) (local.get 0))))`
codegenTestX64_adhoc(
    subneg32,
    'f',
    'f7 d8  neg %eax', {no_prefix:true});
print(print(subneg32).exports.f(-37), 37)
print(print(subneg32).exports.f(42), -42)

let subneg64 =
    `(module
       (func (export "f") (param i64) (result i64)
         (i64.sub (i64.const 0) (local.get 0))))`
codegenTestX64_adhoc(
    subneg64,
    'f',
    '48 f7 d8  neg %rax', {no_prefix:true});
print(print(subneg64).exports.f(-37000000000n), 37000000000n)
print(print(subneg64).exports.f(42000000000n), -42000000000n)





for ( [ty, expect_test] of
      [['i32',   '85 ..     test %e.., %e..'],
       ['i64',   '48 85 ..  test %r.., %r..']] ) {
   codegenTestX64_adhoc(
    `(module
       (func (export "f") (param $p1 ${ty}) (param $p2 ${ty}) (result i32)
         (local $x i32)
         (set_local $x (i32.const 0x4D2))
         (if (${ty}.eq (${ty}.and (local.get $p1) (local.get $p2))
                       (${ty}.const 0))
           (set_local $x (i32.const 0x11D7))
         )
         (get_local $x)
       )
    )`,
    'f',
    `${expect_test}
     0f 85 .. 00 00 00   jnz 0x00000000000000..
     b8 d7 11 00 00      mov \\$0x11D7, %eax
     e9 .. 00 00 00      jmp 0x00000000000000..
     b8 d2 04 00 00      mov \\$0x4D2, %eax`
   );
}




for ( [imm, expect1, expect2] of
      [ 
        ['0x17654321',
         'f7 c. 21 43 65 17   test \\$0x17654321, %e..', 
         ''],
        
        ['0x87654321',
         '41 bb 21 43 65 87   mov \\$-0x789ABCDF, %r11d',
         '4c 85 d.            test %r11, %r..'], 
        
        ['0x187654321',
         '49 bb 21 43 65 87 01 00 00 00   mov \\$0x187654321, %r11',
         '4c 85 d.   test %r11, %r..']] 
      ) {
   codegenTestX64_adhoc(
    `(module
       (func (export "f") (param $p1 i64) (result i32)
         (local $x i32)
         (set_local $x (i32.const 0x4D2))
         (if (i64.eq (i64.and (i64.const ${imm}) (local.get $p1))
                     (i64.const 0))
           (set_local $x (i32.const 0x11D7))
         )
         (get_local $x)
       )
    )`,
    'f',
    `${expect1}
     ${expect2}
     0f 85 .. 00 00 00   jnz 0x00000000000000..
     b8 d7 11 00 00      mov \\$0x11D7, %eax
     e9 .. 00 00 00      jmp 0x00000000000000..
     b8 d2 04 00 00      mov \\$0x4D2, %eax`
   );
}




function cmpSel32vs64(cmpTy, cmpOp, selTy) {
    return `(module
              (func (export "f")
                    (param $p1 ${cmpTy}) (param $p2 ${cmpTy})
                    (param $p3 ${selTy}) (param $p4 ${selTy})
                    (result ${selTy})
                (select (local.get $p3)
                        (local.get $p4)
                        (${cmpTy}.${cmpOp} (local.get $p1) (local.get $p2)))
              )
            )`;
}
if (getBuildConfiguration().windows) {
    for ( [cmpTy, cmpOp, selTy, insn1, insn2, insn3] of
          [ ['i32', 'le_s', 'i32',  '8b c3        mov %ebx, %eax',
                                    '3b ca        cmp %edx, %ecx',
                                    '41 0f 4f c1  cmovnle %r9d, %eax'],
            ['i32', 'lt_u', 'i64',  '48 8b c3     mov %rbx, %rax',
                                    '3b ca        cmp %edx, %ecx',
                                    '49 0f 43 c1  cmovnb %r9, %rax'],
            ['i64', 'le_s', 'i32',  '8b c3        mov %ebx, %eax',
                                    '48 3b ca     cmp %rdx, %rcx',
                                    '41 0f 4f c1  cmovnle %r9d, %eax'],
            ['i64', 'lt_u', 'i64',  '48 8b c3     mov %rbx, %rax',
                                    '48 3b ca     cmp %rdx, %rcx',
                                    '49 0f 43 c1  cmovnb %r9, %rax']
          ] ) {
        codegenTestX64_adhoc(cmpSel32vs64(cmpTy, cmpOp, selTy), 'f',
          `4. 8b d8   mov %r8.*, %.bx
           ${insn1}
           ${insn2}
           ${insn3}`
        );
    }
} else {
    for ( [cmpTy, cmpOp, selTy, insn1, insn2, insn3] of
          [ ['i32', 'le_s', 'i32',  '8b c2        mov %edx, %eax',
                                    '3b fe        cmp %esi, %edi',
                                    '0f 4f c1     cmovnle %ecx, %eax'],
            ['i32', 'lt_u', 'i64',  '48 8b c2     mov %rdx, %rax',
                                    '3b fe        cmp %esi, %edi',
                                    '48 0f 43 c1  cmovnb %rcx, %rax'],
            ['i64', 'le_s', 'i32',  '8b c2        mov %edx, %eax',
                                    '48 3b fe     cmp %rsi, %rdi',
                                    '0f 4f c1     cmovnle %ecx, %eax'],
            ['i64', 'lt_u', 'i64',  '48 8b c2     mov %rdx, %rax',
                                    '48 3b fe     cmp %rsi, %rdi',
                                    '48 0f 43 c1  cmovnb %rcx, %rax']
          ] ) {
        codegenTestX64_adhoc(cmpSel32vs64(cmpTy, cmpOp, selTy), 'f',
          `${insn1}
           ${insn2}
           ${insn3}`
        );
    }
}




for ( [pAnyCmp, pAnySel, cmpBytes, cmpArgL, cmovBytes, cmovArgL ] of
      [ 
        ['$pReg1', '$pReg2',
         '4. .. ..', '%r.+',  '4. .. .. ..', '%r.+'],
        
        ['$pReg1', '$pMem2',
         '4. .. ..', '%r.+',  '4. .. .. .. ..', '0x..\\(%rbp\\)'],
        
        ['$pMem1', '$pReg2',
         '4. .. .. ..', '0x..\\(%rbp\\)', '4. .. .. ..', '%r.+'],
        
        ['$pMem1', '$pMem2',
         '4. .. .. ..', '0x..\\(%rbp\\)', '4. .. .. .. ..', '0x..\\(%rbp\\)']
      ] ) {
   codegenTestX64_adhoc(
    `(module
       (func (export "f")
             (param $p1 i64)    (param $p2 i64)     ;; in regs for both ABIs
             (param $pReg1 i64) (param $pReg2 i64)  ;; in regs for both ABIs
             (param i64)        (param i64)         ;; ignored
             (param $pMem1 i64) (param $pMem2 i64)  ;; in mem for both ABIs
             (result i64)
         (select (local.get $p1)
                 (local.get ${pAnySel})
                 (i64.eq (local.get $p2) (local.get ${pAnyCmp})))
       )
    )`,
    'f',
    
    (getBuildConfiguration().windows ? '' : '48 8b ..       mov %r.+, %r.+\n') +
    
    `48 8b ..       mov %r.+, %r.+
     ${cmpBytes}    cmpq*    ${cmpArgL}, %r.+
     ${cmovBytes}   cmovnzq* ${cmovArgL}, %r.+`
   );
}
