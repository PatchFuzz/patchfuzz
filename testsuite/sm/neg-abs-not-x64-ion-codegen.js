








codegenTestX64_IGNOREDxv128_v128(
    [['i8x16.neg', `
66 0f ef c0               pxor %xmm0, %xmm0
66 0f f8 c1               psubb %xmm1, %xmm0`],
     ['i16x8.neg', `
66 0f ef c0               pxor %xmm0, %xmm0
66 0f f9 c1               psubw %xmm1, %xmm0`],
     ['i32x4.neg', `
66 0f ef c0               pxor %xmm0, %xmm0
66 0f fa c1               psubd %xmm1, %xmm0`],
     ['i64x2.neg', `
66 0f ef c0               pxor %xmm0, %xmm0
66 0f fb c1               psubq %xmm1, %xmm0`]] );




codegenTestX64_v128_v128(
    [['f32x4.neg', `66 0f ef 05 ${RIPRADDR}   pxorx ${RIPR}, %xmm0`],
     ['f64x2.neg', `66 0f ef 05 ${RIPRADDR}   pxorx ${RIPR}, %xmm0`],
     ['f32x4.abs', `66 0f db 05 ${RIPRADDR}   pandx ${RIPR}, %xmm0`],
     ['f64x2.abs', `66 0f db 05 ${RIPRADDR}   pandx ${RIPR}, %xmm0`],
     ['v128.not', `
66 45 0f 75 ff            pcmpeqw %xmm15, %xmm15
66 41 0f ef c7            pxor %xmm15, %xmm0`]] );
