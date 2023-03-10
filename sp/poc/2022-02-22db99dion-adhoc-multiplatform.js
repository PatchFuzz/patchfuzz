



























codegenTestMultiplatform_adhoc(
    `(module (func (export "mul32_zeroL") (param $p1 i32) (result i32)
       (i32.mul (i32.const 0) (local.get $p1))))`,
    "mul32_zeroL",
    {x64:   
            
            
            
            
            
            
            
            
            `8b cf     mov %edi, %ecx
             8b c1     mov %ecx, %eax
             33 c0     xor %eax, %eax`,
     x86:   `33 c0     xor %eax, %eax`,
     arm64: `2a1f03e0  mov w0, wzr`,
     arm:   `e3a00000  mov r0, #0`},
    {x86: {no_prefix:true}}
);
codegenTestMultiplatform_adhoc(
    `(module (func (export "mul64_zeroL") (param $p1 i64) (result i64)
       (i64.mul (i64.const 0) (local.get $p1))))`,
    "mul64_zeroL",
    
    {x64:   
            `48 8b cf  mov %rdi, %rcx
             48 8b c1  mov %rcx, %rax
             48 33 c0  xor %rax, %rax`,
     x86:   `33 c0     xor %eax, %eax
             33 d2     xor %edx, %edx`,
     arm64: `aa1f03e0  mov x0, xzr`,
     arm:   
            `e0200000  eor r0, r0, r0
             e0211001  eor r1, r1, r1` },
    {x86: {no_prefix:true}}
);

codegenTestMultiplatform_adhoc(
    `(module (func (export "mul32_oneL") (param $p1 i32) (result i32)
       (i32.mul (i32.const 1) (local.get $p1))))`,
    "mul32_oneL",
    {x64:   `8b cf     mov %edi, %ecx
             8b c1     mov %ecx, %eax`,
     x86:   `8b 45 10  movl 0x10\\(%rbp\\), %eax`,
     arm64: ``,
     arm:   ``},
    {x86: {no_prefix:true}}
);
codegenTestMultiplatform_adhoc(
    `(module (func (export "mul64_oneL") (param $p1 i64) (result i64)
       (i64.mul (i64.const 1) (local.get $p1))))`,
    "mul64_oneL",
    {x64:   `48 8b cf  mov %rdi, %rcx
             48 8b c1  mov %rcx, %rax`,
     x86:   `8b 55 14  movl 0x14\\(%rbp\\), %edx
             8b 45 10  movl 0x10\\(%rbp\\), %eax`,
     arm64: ``,
     arm:   ``},
    {x86: {no_prefix:true}}
);

codegenTestMultiplatform_adhoc(
    `(module (func (export "mul32_minusOneL") (param $p1 i32) (result i32)
       (i32.mul (i32.const -1) (local.get $p1))))`,
    "mul32_minusOneL",
    {x64:   `f7 d8     neg %eax`,
     x86:   `f7 d8     neg %eax`,
     arm64: `4b0003e0  neg w0, w0`,
     arm:   `e2600000  rsb r0, r0, #0`},
    {x86: {no_prefix:true}, x64: {no_prefix:true}}
);
codegenTestMultiplatform_adhoc(
    `(module (func (export "mul64_minusOneL") (param $p1 i64) (result i64)
       (i64.mul (i64.const -1) (local.get $p1))))`,
    "mul64_minusOneL",
    {x64:   `48 8b cf  mov %rdi, %rcx
             48 8b c1  mov %rcx, %rax
             48 f7 d8  neg %rax`,
     x86:   `f7 d8     neg %eax
             83 d2 00  adc \\$0x00, %edx
             f7 da     neg %edx`,
     arm64: `cb0003e0  neg  x0, x0`,
     arm:   `e2700000  rsbs r0, r0, #0 
             e2e11000  rsc  r1, r1, #0`},
    {x86: {no_prefix:true}}
);

codegenTestMultiplatform_adhoc(
    `(module (func (export "mul32_twoL") (param $p1 i32) (result i32)
       (i32.mul (i32.const 2) (local.get $p1))))`,
    "mul32_twoL",
    {x64:   `8b cf     mov %edi, %ecx
             8b c1     mov %ecx, %eax
             03 c0     add %eax, %eax`,
     x86:   `8b 45 10  movl 0x10\\(%rbp\\), %eax
             03 c0     add %eax, %eax`,
     arm64: `0b000000  add w0, w0, w0`,
     arm:   `e0900000  adds r0, r0, r0`},
    {x86: {no_prefix:true}}
);
codegenTestMultiplatform_adhoc(
    `(module (func (export "mul64_twoL") (param $p1 i64) (result i64)
       (i64.mul (i64.const 2) (local.get $p1))))`,
    "mul64_twoL",
    {x64:   `48 8b cf  mov %rdi, %rcx
             48 8b c1  mov %rcx, %rax
             48 03 c0  add %rax, %rax`,
     x86:   `8b 55 14  movl 0x14\\(%rbp\\), %edx
             8b 45 10  movl 0x10\\(%rbp\\), %eax
             03 c0     add %eax, %eax
             13 d2     adc %edx, %edx`,
     arm64: `8b000000  add  x0, x0, x0`,
     arm:   `e0900000  adds r0, r0, r0
             e0a11001  adc  r1, r1, r1`},
    {x86: {no_prefix:true}}
);

codegenTestMultiplatform_adhoc(
    `(module (func (export "mul32_fourL") (param $p1 i32) (result i32)
       (i32.mul (i32.const 4) (local.get $p1))))`,
    "mul32_fourL",
    {x64:   `8b cf     mov %edi, %ecx
             8b c1     mov %ecx, %eax
             c1 e0 02  shl \\$0x02, %eax`,
     x86:   `8b 45 10  movl 0x10\\(%rbp\\), %eax
             c1 e0 02  shl \\$0x02, %eax`,
     arm64: `531e7400  lsl w0, w0, #2`,
     arm:   `e1a00100  mov r0, r0, lsl #2`},
    {x86: {no_prefix:true}}
);
codegenTestMultiplatform_adhoc(
    `(module (func (export "mul64_fourL") (param $p1 i64) (result i64)
       (i64.mul (i64.const 4) (local.get $p1))))`,
    "mul64_fourL",
    {x64:   `48 8b cf     mov %rdi, %rcx
             48 8b c1     mov %rcx, %rax
             48 c1 e0 02  shl \\$0x02, %rax`,
     x86:   `8b 55 14     movl 0x14\\(%rbp\\), %edx
             8b 45 10     movl 0x10\\(%rbp\\), %eax
             0f a4 c2 02  shld \\$0x02, %eax, %edx
             c1 e0 02     shl \\$0x02, %eax`,
     arm64: `d37ef400     lsl x0, x0, #2`,
     arm:   `e1a01101     mov r1, r1, lsl #2
             e1811f20     orr r1, r1, r0, lsr #30
             e1a00100     mov r0, r0, lsl #2`},
    {x86: {no_prefix:true}}
);









codegenTestMultiplatform_adhoc(
    `(module (func (export "mul32_zeroR") (param $p1 i32) (result i32)
       (i32.mul (local.get $p1) (i32.const 0))))`,
    "mul32_zeroR",
    {x64:   `8b cf     mov %edi, %ecx
             8b c1     mov %ecx, %eax
             33 c0     xor %eax, %eax`,
     x86:   `33 c0     xor %eax, %eax`,
     arm64: `2a1f03e0  mov w0, wzr`,
     arm:   `e3a00000  mov r0, #0`},
    {x86: {no_prefix:true}}
);
codegenTestMultiplatform_adhoc(
    `(module (func (export "mul64_zeroR") (param $p1 i64) (result i64)
       (i64.mul (local.get $p1) (i64.const 0))))`,
    "mul64_zeroR",
    {x64:   `48 8b cf  mov %rdi, %rcx
             48 8b c1  mov %rcx, %rax
             48 33 c0  xor %rax, %rax`,     
     x86:   `33 c0     xor %eax, %eax
             33 d2     xor %edx, %edx`,
     arm64: `aa1f03e0  mov x0, xzr`,
     arm:   `e0200000  eor r0, r0, r0
             e0211001  eor r1, r1, r1` },
    {x86: {no_prefix:true}}
);

codegenTestMultiplatform_adhoc(
    `(module (func (export "mul32_oneR") (param $p1 i32) (result i32)
       (i32.mul (local.get $p1) (i32.const 1))))`,
    "mul32_oneR",
    {x64:   `8b cf     mov %edi, %ecx
             8b c1     mov %ecx, %eax`,
     x86:   `8b 45 10  movl 0x10\\(%rbp\\), %eax`,
     arm64: ``,
     arm:   ``},
    {x86: {no_prefix:true}}
);
codegenTestMultiplatform_adhoc(
    `(module (func (export "mul64_oneR") (param $p1 i64) (result i64)
       (i64.mul (local.get $p1) (i64.const 1))))`,
    "mul64_oneR",
    {x64:   `48 8b cf  mov %rdi, %rcx
             48 8b c1  mov %rcx, %rax`,
     x86:   `8b 55 14  movl 0x14\\(%rbp\\), %edx
             8b 45 10  movl 0x10\\(%rbp\\), %eax`,
     arm64: ``,
     arm:   ``},
    {x86: {no_prefix:true}}
);

codegenTestMultiplatform_adhoc(
    `(module (func (export "mul32_minusOneR") (param $p1 i32) (result i32)
       (i32.mul (local.get $p1) (i32.const -1))))`,
    "mul32_minusOneR",
    {x64:   `f7 d8     neg %eax`,
     x86:   `f7 d8     neg %eax`,
     arm64: `4b0003e0  neg w0, w0`,
     arm:   `e2600000  rsb r0, r0, #0`},
    {x86: {no_prefix:true}, x64: {no_prefix:true}}
);
codegenTestMultiplatform_adhoc(
    `(module (func (export "mul64_minusOneR") (param $p1 i64) (result i64)
       (i64.mul (local.get $p1) (i64.const -1))))`,
    "mul64_minusOneR",
    {x64:   `48 8b cf  mov %rdi, %rcx
             48 8b c1  mov %rcx, %rax
             48 f7 d8  neg %rax`,
     x86:   `f7 d8     neg %eax
             83 d2 00  adc \\$0x00, %edx
             f7 da     neg %edx`,
     arm64: `cb0003e0  neg  x0, x0`,
     arm:   `e2700000  rsbs r0, r0, #0
             e2e11000  rsc  r1, r1, #0`},
    {x86: {no_prefix:true}}
);

codegenTestMultiplatform_adhoc(
    `(module (func (export "mul32_twoR") (param $p1 i32) (result i32)
       (i32.mul (local.get $p1) (i32.const 2))))`,
    "mul32_twoR",
    {x64:   `8b cf     mov %edi, %ecx
             8b c1     mov %ecx, %eax
             03 c0     add %eax, %eax`,
     x86:   `8b 45 10  movl 0x10\\(%rbp\\), %eax
             03 c0     add %eax, %eax`,
     arm64: `0b000000  add w0, w0, w0`,
     arm:   `e0900000  adds r0, r0, r0`},
    {x86: {no_prefix:true}}
);
codegenTestMultiplatform_adhoc(
    `(module (func (export "mul64_twoR") (param $p1 i64) (result i64)
       (i64.mul (local.get $p1) (i64.const 2))))`,
    "mul64_twoR",
    {x64:   `48 8b cf  mov %rdi, %rcx
             48 8b c1  mov %rcx, %rax
             48 03 c0  add %rax, %rax`,
     x86:   `8b 55 14  movl 0x14\\(%rbp\\), %edx
             8b 45 10  movl 0x10\\(%rbp\\), %eax
             03 c0     add %eax, %eax
             13 d2     adc %edx, %edx`,
     arm64: `8b000000  add  x0, x0, x0`,
     arm:   `e0900000  adds r0, r0, r0
             e0a11001  adc  r1, r1, r1`},
    {x86: {no_prefix:true}}
);

codegenTestMultiplatform_adhoc(
    `(module (func (export "mul32_fourR") (param $p1 i32) (result i32)
       (i32.mul (local.get $p1) (i32.const 4))))`,
    "mul32_fourR",
    {x64:   `8b cf     mov %edi, %ecx
             8b c1     mov %ecx, %eax
             c1 e0 02  shl \\$0x02, %eax`,
     x86:   `8b 45 10  movl 0x10\\(%rbp\\), %eax
             c1 e0 02  shl \\$0x02, %eax`,
     arm64: `531e7400  lsl w0, w0, #2`,
     arm:   `e1a00100  mov r0, r0, lsl #2`},
    {x86: {no_prefix:true}}
);
codegenTestMultiplatform_adhoc(
    `(module (func (export "mul64_fourR") (param $p1 i64) (result i64)
       (i64.mul (local.get $p1) (i64.const 4))))`,
    "mul64_fourR",
    {x64:   `48 8b cf     mov %rdi, %rcx
             48 8b c1     mov %rcx, %rax
             48 c1 e0 02  shl \\$0x02, %rax`,
     x86:   `8b 55 14     movl 0x14\\(%rbp\\), %edx
             8b 45 10     movl 0x10\\(%rbp\\), %eax
             0f a4 c2 02  shld \\$0x02, %eax, %edx
             c1 e0 02     shl \\$0x02, %eax`,
     arm64: `d37ef400     lsl x0, x0, #2`,
     arm:   `e1a01101     mov r1, r1, lsl #2
             e1811f20     orr r1, r1, r0, lsr #30
             e1a00100     mov r0, r0, lsl #2`
    },
    {x86: {no_prefix:true}}
);





codegenTestMultiplatform_adhoc(
    `(module (func (export "shl32_zeroR") (param $p1 i32) (result i32)
       (i32.shl (local.get $p1) (i32.const 0))))`,
    "shl32_zeroR",
    
    {x64:   `8b cf     mov %edi, %ecx
             8b c1     mov %ecx, %eax`,
     x86:   `8b 45 10  movl 0x10\\(%rbp\\), %eax`,
     arm64: 
            `2a0003e2  mov w2, w0
             2a0203e1  mov w1, w2
             53007c20  lsr w0, w1, #0`, 
     arm:   `e1a02000  mov r2, r0
             e1a01002  mov r1, r2
             e1a00001  mov r0, r1`
    },
    {x86: {no_prefix:true}}
);
codegenTestMultiplatform_adhoc(
    `(module (func (export "shl64_zeroR") (param $p1 i64) (result i64)
       (i64.shl (local.get $p1) (i64.const 0))))`,
    "shl64_zeroR",
    
    {x64:   `48 8b cf  mov %rdi, %rcx
             48 8b c1  mov %rcx, %rax`,
     x86:   `8b 55 14  movl 0x14\\(%rbp\\), %edx
             8b 45 10  movl 0x10\\(%rbp\\), %eax`,
     arm64: ``, 
     arm:   ``  
    },
    {x86: {no_prefix:true}}
);

codegenTestMultiplatform_adhoc(
    `(module (func (export "shrU32_zeroR") (param $p1 i32) (result i32)
       (i32.shr_u (local.get $p1) (i32.const 0))))`,
    "shrU32_zeroR",
    {x64:   `8b cf     mov %edi, %ecx
             8b c1     mov %ecx, %eax`,
     x86:   `8b 45 10  movl 0x10\\(%rbp\\), %eax`,
     arm64: `2a0003e2  mov w2, w0
             2a0203e1  mov w1, w2
             2a0103e0  mov w0, w1`,
     arm:   `e1a02000  mov r2, r0
             e1a01002  mov r1, r2
             e1a00001  mov r0, r1`
    },
    {x86: {no_prefix:true}}
);
codegenTestMultiplatform_adhoc(
    `(module (func (export "shrU64_zeroR") (param $p1 i64) (result i64)
       (i64.shr_u (local.get $p1) (i64.const 0))))`,
    "shrU64_zeroR",
    {x64:   `48 8b cf  mov %rdi, %rcx
             48 8b c1  mov %rcx, %rax`,
     x86:   `8b 55 14  movl 0x14\\(%rbp\\), %edx
             8b 45 10  movl 0x10\\(%rbp\\), %eax`,
     arm64: ``,
     arm:   ``
    },
    {x86: {no_prefix:true}}
);

codegenTestMultiplatform_adhoc(
    `(module (func (export "shrS32_zeroR") (param $p1 i32) (result i32)
       (i32.shr_s (local.get $p1) (i32.const 0))))`,
    "shrS32_zeroR",
    {x64:   `8b cf     mov %edi, %ecx
             8b c1     mov %ecx, %eax`,
     x86:   `8b 45 10  movl 0x10\\(%rbp\\), %eax`,
     arm64: `2a0003e2  mov w2, w0
             2a0203e1  mov w1, w2
             13007c20  sbfx w0, w1, #0, #32`,
     arm:   `e1a02000  mov r2, r0
             e1a01002  mov r1, r2
             e1a00001  mov r0, r1`
    },
    {x86: {no_prefix:true}}
);
codegenTestMultiplatform_adhoc(
    `(module (func (export "shrS64_zeroR") (param $p1 i64) (result i64)
       (i64.shr_s (local.get $p1) (i64.const 0))))`,
    "shrS64_zeroR",
    {x64:   `48 8b cf  mov %rdi, %rcx
             48 8b c1  mov %rcx, %rax`,
     x86:   `8b 55 14  movl 0x14\\(%rbp\\), %edx
             8b 45 10  movl 0x10\\(%rbp\\), %eax`,
     arm64: ``,
     arm:   ``
    },
    {x86: {no_prefix:true}}
);







codegenTestMultiplatform_adhoc(
    `(module (func (export "add32_zeroR") (param $p1 i32) (result i32)
       (i32.add (local.get $p1) (i32.const 0))))`,
    "add32_zeroR",
    {x64:   `8b cf     mov %edi, %ecx
             8b c1     mov %ecx, %eax`,
     x86:   `8b 45 10  movl 0x10\\(%rbp\\), %eax`,
     arm64: ``,
     arm:   ``
    },
    {x86: {no_prefix:true}}
);
codegenTestMultiplatform_adhoc(
    `(module (func (export "add64_zeroR") (param $p1 i64) (result i64)
       (i64.add (local.get $p1) (i64.const 0))))`,
    "add64_zeroR",
    {x64:   `48 8b cf  mov %rdi, %rcx
             48 8b c1  mov %rcx, %rax`,
     x86:   `8b 55 14  movl 0x14\\(%rbp\\), %edx
             8b 45 10  movl 0x10\\(%rbp\\), %eax`,
     arm64: ``,
     arm:   ``
    },
    {x86: {no_prefix:true}}
);

codegenTestMultiplatform_adhoc(
    `(module (func (export "add32_zeroL") (param $p1 i32) (result i32)
       (i32.add (i32.const 0) (local.get $p1))))`,
    "add32_zeroL",
    {x64:   `8b cf     mov %edi, %ecx
             8b c1     mov %ecx, %eax`,
     x86:   `8b 45 10  movl 0x10\\(%rbp\\), %eax`,
     arm64: ``,
     arm:   ``
    },
    {x86: {no_prefix:true}}
);
codegenTestMultiplatform_adhoc(
    `(module (func (export "add64_zeroL") (param $p1 i64) (result i64)
       (i64.add (i64.const 0) (local.get $p1))))`,
    "add64_zeroL",
    {x64:   `48 8b cf  mov %rdi, %rcx
             48 8b c1  mov %rcx, %rax`,
     x86:   `8b 55 14  movl 0x14\\(%rbp\\), %edx
             8b 45 10  movl 0x10\\(%rbp\\), %eax`,
     arm64: ``,
     arm:   ``
    },
    {x86: {no_prefix:true}}
);

codegenTestMultiplatform_adhoc(
    `(module (func (export "add32_self") (param $p1 i32) (result i32)
       (i32.add (local.get $p1) (local.get $p1))))`,
    "add32_self",
    {x64:   `8b cf  mov  %edi, %ecx
             8b c1  mov  %ecx, %eax
             03 c1  add  %ecx, %eax`,
     x86:   `8b 45 10  movl 0x10\\(%rbp\\), %eax
             03 45 10  addl 0x10\\(%rbp\\), %eax`,
     arm64: `0b000000  add  w0, w0, w0`,
     arm:   `e0900000  adds r0, r0, r0 `
    },
    {x86: {no_prefix:true}}
);
codegenTestMultiplatform_adhoc(
    `(module (func (export "add64_self") (param $p1 i64) (result i64)
       (i64.add (local.get $p1) (local.get $p1))))`,
    "add64_self",
    
    {x64:   `48 8b cf  mov %rdi, %rcx
             48 8b c1  mov %rcx, %rax
             48 03 c1  add %rcx, %rax`,
     x86:   
            `8b 5d 14        movl 0x14\\(%rbp\\), %ebx
             8b 4d 10        movl 0x10\\(%rbp\\), %ecx
             bf ef be ad de  mov \\$-0x21524111, %edi
             8b 55 14        movl 0x14\\(%rbp\\), %edx
             8b 45 10        movl 0x10\\(%rbp\\), %eax
             03 c1           add %ecx, %eax
             13 d3           adc %ebx, %edx`,
     arm64: `8b000000  add  x0, x0, x0`,
     arm:   
            `e1a03001  mov  r3, r1
             e1a02000  mov  r2, r0
             e1a05003  mov  r5, r3
             e1a04002  mov  r4, r2
             e1a01003  mov  r1, r3
             e1a00002  mov  r0, r2
             e0900004  adds r0, r0, r4
             e0a11005  adc  r1, r1, r5`
    },
    {x86: {no_prefix:true}}
);







codegenTestMultiplatform_adhoc(
    `(module (func (export "sub32_zeroR") (param $p1 i32) (result i32)
       (i32.sub (local.get $p1) (i32.const 0))))`,
    "sub32_zeroR",
    {x64:   `8b cf     mov %edi, %ecx
             8b c1     mov %ecx, %eax`,
     x86:   `8b 45 10  movl 0x10\\(%rbp\\), %eax`,
     arm64: ``,
     arm:   ``
    },
    {x86: {no_prefix:true}}
);
codegenTestMultiplatform_adhoc(
    `(module (func (export "sub64_zeroR") (param $p1 i64) (result i64)
       (i64.sub (local.get $p1) (i64.const 0))))`,
    "sub64_zeroR",
    
    {x64:   `48 8b cf     mov %rdi, %rcx
             48 8b c1     mov %rcx, %rax
             48 83 e8 00  sub \\$0x00, %rax`,
     x86:   `8b 55 14  movl 0x14\\(%rbp\\), %edx
             8b 45 10  movl 0x10\\(%rbp\\), %eax
             83 ea 00  sub  \\$0x00, %edx`,
     arm64: ``,
     arm:   `e2500000  subs r0, r0, #0
             e2c11000  sbc  r1, r1, #0`
    },
    {x86: {no_prefix:true}}
);

codegenTestMultiplatform_adhoc(
    `(module (func (export "sub32_zeroL") (param $p1 i32) (result i32)
       (i32.sub (i32.const 0) (local.get $p1))))`,
    "sub32_zeroL",
    {x64:   `8b cf     mov %edi, %ecx
             8b c1     mov %ecx, %eax
             f7 d8     neg %eax`,
     x86:   `8b 45 10  movl 0x10\\(%rbp\\), %eax
             f7 d8     neg %eax`,
     arm64: `4b0003e0  neg w0, w0 `,
     arm:   `e2600000  rsb r0, r0, #0`
    },
    {x86: {no_prefix:true}}
);
codegenTestMultiplatform_adhoc(
    `(module (func (export "sub64_zeroL") (param $p1 i64) (result i64)
       (i64.sub (i64.const 0) (local.get $p1))))`,
    "sub64_zeroL",
    {x64:   `48 8b cf  mov %rdi, %rcx
             48 8b c1  mov %rcx, %rax
             48 f7 d8  neg %rax`,
     x86:   `8b 55 14  movl 0x14\\(%rbp\\), %edx
             8b 45 10  movl 0x10\\(%rbp\\), %eax
             f7 d8     neg %eax
             83 d2 00  adc \\$0x00, %edx
             f7 da     neg %edx`,
     arm64: `cb0003e0  neg  x0, x0`,
     arm:   `e2700000  rsbs r0, r0, #0
             e2e11000  rsc  r1, r1, #0`
    },
    {x86: {no_prefix:true}}
);

codegenTestMultiplatform_adhoc(
    `(module (func (export "sub32_self") (param $p1 i32) (result i32)
       (i32.sub (local.get $p1) (local.get $p1))))`,
    "sub32_self",
    {x64:   `33 c0  xor %eax, %eax`,
     x86:   `33 c0  xor %eax, %eax`,
     arm64: `52800000  mov w0, #0x0`,
     arm:   `e3a00000  mov r0, #0`
    },
    {x86: {no_prefix:true}}
);
codegenTestMultiplatform_adhoc(
    `(module (func (export "sub64_self") (param $p1 i64) (result i64)
       (i64.sub (local.get $p1) (local.get $p1))))`,
    "sub64_self",
    
    {x64:   `48 8b cf        mov %rdi, %rcx
             48 8b c1        mov %rcx, %rax
             48 2b c1        sub %rcx, %rax`,
     x86:   
            `8b 5d 14        movl 0x14\\(%rbp\\), %ebx
             8b 4d 10        movl 0x10\\(%rbp\\), %ecx
             bf ef be ad de  mov  \\$-0x21524111, %edi
             8b 55 14        movl 0x14\\(%rbp\\), %edx
             8b 45 10        movl 0x10\\(%rbp\\), %eax
             2b c1           sub %ecx, %eax
             1b d3           sbb %ebx, %edx`,
     arm64: `cb000000  sub  x0, x0, x0`,
     arm:   `e1a03001  mov  r3, r1
             e1a02000  mov  r2, r0
             e1a05003  mov  r5, r3
             e1a04002  mov  r4, r2
             e1a01003  mov  r1, r3
             e1a00002  mov  r0, r2
             e0500004  subs r0, r0, r4
             e0c11005  sbc  r1, r1, r5`
    },
    {x86: {no_prefix:true}}
);
