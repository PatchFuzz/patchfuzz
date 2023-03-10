













codegenTestX64_adhoc(
`(module
    (func (export "f") (param v128) (param v128) (param v128) (param v128) (result v128)
      (v128.bitselect (local.get 0) (local.get 1) (local.get 2))))`,
    'f',
`66 0f 6f da               movdqa %xmm2, %xmm3
66 0f db c3               pand %xmm3, %xmm0
66 0f df d9               pandn %xmm1, %xmm3
66 0f eb c3               por %xmm3, %xmm0`);



codegenTestX64_adhoc(
  `(module
      (func (export "f") (param v128) (param v128) (param v128) (result v128)
        (v128.bitselect (local.get 0) (local.get 1) (v128.const i32x4 -1 0 0 -1))))`,
      'f',
  `66 0f 3a 0e c1 c3         pblendw \\$0xC3, %xmm1, %xmm0`);
  


codegenTestX64_adhoc(
  `(module
      (func (export "f") (param v128) (param v128) (param v128) (param v128) (result v128)
        (v128.bitselect (local.get 2) (local.get 3)
           (i32x4.eq (local.get 0) (local.get 1)))))`,
      'f', `
66 0f 76 c1               pcmpeqd %xmm1, %xmm0
66 0f 6f cb               movdqa %xmm3, %xmm1
66 0f 38 10 ca            pblendvb %xmm2, %xmm1
66 0f 6f c1               movdqa %xmm1, %xmm0`);
