








codegenTestX64_v128xLITERAL_v128(
    [['i8x16.shl', '(i32.const 2)', `
66 0f fc c0               paddb %xmm0, %xmm0
66 0f fc c0               paddb %xmm0, %xmm0`],
     ['i16x8.shl', '(i32.const 2)', `66 0f 71 f0 02            psllw \\$0x02, %xmm0`],
     ['i32x4.shl', '(i32.const 2)', `66 0f 72 f0 02            pslld \\$0x02, %xmm0`],
     ['i64x2.shl', '(i32.const 2)', `66 0f 73 f0 02            psllq \\$0x02, %xmm0`],
     ['i8x16.shr_u', '(i32.const 2)', `
66 0f db 05 ${RIPRADDR}   pandx ${RIPR}, %xmm0
66 0f 71 d0 02            psrlw \\$0x02, %xmm0`],
     ['i16x8.shr_s', '(i32.const 2)', `66 0f 71 e0 02            psraw \\$0x02, %xmm0`],
     ['i16x8.shr_u', '(i32.const 2)', `66 0f 71 d0 02            psrlw \\$0x02, %xmm0`],
     ['i32x4.shr_s', '(i32.const 2)', `66 0f 72 e0 02            psrad \\$0x02, %xmm0`],
     ['i32x4.shr_u', '(i32.const 2)', `66 0f 72 d0 02            psrld \\$0x02, %xmm0`],
     ['i64x2.shr_u', '(i32.const 2)', `66 0f 73 d0 02            psrlq \\$0x02, %xmm0`]] );


