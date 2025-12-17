codegenTestX64_v128_v128(
    [['i32x4.trunc_sat_f32x4_s',
     
     
`
movaps %xmm0, %xmm15
cmpps \\$0x00, %xmm15, %xmm15
pand %xmm15, %xmm0`],
     ['i32x4.trunc_sat_f32x4_u', `
xorps %xmm15, %xmm15
maxps %xmm15, %xmm0`],
     ['f32x4.convert_i32x4_u', `
pxor %xmm15, %xmm15
pblendw \\$0x55, %xmm0, %xmm15
psubd %xmm15, %xmm0
cvtdq2ps %xmm15, %xmm15`]],
    {no_suffix:true});


