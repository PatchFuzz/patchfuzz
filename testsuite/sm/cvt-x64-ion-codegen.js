







codegenTestX64_v128_v128(
    [['i32x4.trunc_sat_f32x4_s',
     
     
`
44 0f 28 f8               movaps %xmm0, %xmm15
45 0f c2 ff 00            cmpps \\$0x00, %xmm15, %xmm15
66 41 0f db c7            pand %xmm15, %xmm0`],
     ['i32x4.trunc_sat_f32x4_u', `
45 0f 57 ff               xorps %xmm15, %xmm15
41 0f 5f c7               maxps %xmm15, %xmm0`],
     ['f32x4.convert_i32x4_u', `
66 45 0f ef ff            pxor %xmm15, %xmm15
66 44 0f 3a 0e f8 55      pblendw \\$0x55, %xmm0, %xmm15
66 41 0f fa c7            psubd %xmm15, %xmm0
45 0f 5b ff               cvtdq2ps %xmm15, %xmm15`]],
    {no_suffix:true});


