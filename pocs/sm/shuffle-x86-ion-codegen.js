codegenTestX64_v128xv128_v128([
     
    ['i8x16.shuffle 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15',
     ''],

     
    ['i8x16.shuffle 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31',
     `movdqa %xmm1, %xmm0`],

     
    ['i8x16.shuffle 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5',
     `
punpcklbw %xmm0, %xmm0
pshufhw \\$0x55, %xmm0, %xmm0
pshufd \\$0xAA, %xmm0, %xmm0`],

     
    ['i8x16.shuffle 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5',
     `
pshuflw \\$0xAA, %xmm0, %xmm0
pshufd \\$0x00, %xmm0, %xmm0`],

     
    ['i8x16.shuffle 2 1 4 3 6 5 8 7 10 9 12 11 14 13 0 15',
`
pshufbx ${RIPR}, %xmm0`],

     
    ['i8x16.shuffle 2 3 0 1 6 7 4 5 10 11 8 9 14 15 12 13',
`
pshuflw \\$0xB1, %xmm0, %xmm0
pshufhw \\$0xB1, %xmm0, %xmm0`],

     
    ['i8x16.shuffle 4 5 6 7 0 1 2 3 12 13 14 15 8 9 10 11',
     `pshufd \\$0xB1, %xmm0, %xmm0`],

     
    ['i8x16.shuffle 13 14 15 0 1 2 3 4 5 6 7 8 9 10 11 12',
     `palignr \\$0x0D, %xmm0, %xmm0`],

     
     
    ['i8x16.shuffle 15 29 0 1 2 1 2 0 3 4 7 8 16 8 17 9',
`
movdqa %xmm1, %xmm15
pshufbx ${RIPR}, %xmm15
pshufbx ${RIPR}, %xmm0
por %xmm15, %xmm0`]]);

codegenTestX64_v128xLITERAL_v128(
    [
     
     
     
     
     
     
     
     ['i8x16.shuffle 16 16 16 0 1 2 3 4 5 6 7 8 9 10 11 12',
      '(v128.const i32x4 0 0 0 0)',
`
pslldq \\$0x03, %xmm0`],

     
     ['i8x16.shuffle 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18',
      '(v128.const i32x4 0 0 0 0)',
`
psrldq \\$0x03, %xmm0`]]);



codegenTestX64_adhoc(
     `(func (export "f") (param v128 v128 v128 v128) (result v128)
        (i8x16.shuffle 0 17 2 3 4 5 6 7 24 25 26 11 12 13 30 15
          (local.get 2)(local.get 3)))`,
     'f',
`
movdqa %xmm2, %xmm1
movdqax ${RIPR}, %xmm0
pblendvb %xmm3, %xmm1
movdqa %xmm1, %xmm0`);
