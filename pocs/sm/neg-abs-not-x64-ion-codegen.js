codegenTestX64_IGNOREDxv128_v128(
    [['i8x16.neg', `
pxor %xmm0, %xmm0
psubb %xmm1, %xmm0`],
     ['i16x8.neg', `
pxor %xmm0, %xmm0
psubw %xmm1, %xmm0`],
     ['i32x4.neg', `
pxor %xmm0, %xmm0
psubd %xmm1, %xmm0`],
     ['i64x2.neg', `
pxor %xmm0, %xmm0
psubq %xmm1, %xmm0`]] );




codegenTestX64_v128_v128(
    [['f32x4.neg', `pxorx ${RIPR}, %xmm0`],
     ['f64x2.neg', `pxorx ${RIPR}, %xmm0`],
     ['f32x4.abs', `pandx ${RIPR}, %xmm0`],
     ['f64x2.abs', `pandx ${RIPR}, %xmm0`],
     ['v128.not', `
pcmpeqw %xmm15, %xmm15
pxor %xmm15, %xmm0`]] );
