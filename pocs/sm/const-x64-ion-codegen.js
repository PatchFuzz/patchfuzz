codegenTestX64_unit_v128(
    [['v128.const i8x16 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
      `pxor %xmm0, %xmm0`],
     ['v128.const i8x16 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1',
      `pcmpeqw %xmm0, %xmm0`],
     ['v128.const i16x8 0 0 0 0 0 0 0 0',
      `pxor %xmm0, %xmm0`],
     ['v128.const i16x8 -1 -1 -1 -1 -1 -1 -1 -1',
      `pcmpeqw %xmm0, %xmm0`],
     ['v128.const i32x4 0 0 0 0',
      `pxor %xmm0, %xmm0`],
     ['v128.const i32x4 -1 -1 -1 -1',
      `pcmpeqw %xmm0, %xmm0`],
     ['v128.const i64x2 0 0',
      `pxor %xmm0, %xmm0`],
     ['v128.const i64x2 -1 -1',
      `pcmpeqw %xmm0, %xmm0`],
     ['v128.const f32x4 0 0 0 0',
      
      `pxor %xmm0, %xmm0`],
     ['v128.const f64x2 0 0',
      
      `pxor %xmm0, %xmm0`]] );
