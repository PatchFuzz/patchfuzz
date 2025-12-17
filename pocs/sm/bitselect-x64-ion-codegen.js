codegenTestX64_adhoc(
`(module
    (func (export "f") (param v128) (param v128) (param v128) (param v128) (result v128)
      (v128.bitselect (local.get 0) (local.get 1) (local.get 2))))`,
    'f',
`movdqa %xmm2, %xmm3
pand %xmm3, %xmm0
pandn %xmm1, %xmm3
por %xmm3, %xmm0`);



codegenTestX64_adhoc(
  `(module
      (func (export "f") (param v128) (param v128) (param v128) (result v128)
        (v128.bitselect (local.get 0) (local.get 1) (v128.const i32x4 -1 0 0 -1))))`,
      'f',
  `pblendw \\$0x3C, %xmm1, %xmm0`);



codegenTestX64_adhoc(
  `(module
      (func (export "f") (param v128) (param v128) (param v128) (param v128) (result v128)
        (v128.bitselect (local.get 2) (local.get 3)
           (i32x4.eq (local.get 0) (local.get 1)))))`,
      'f', `
pcmpeqd %xmm1, %xmm0
movdqa %xmm3, %xmm1
pblendvb %xmm2, %xmm1
movdqa %xmm1, %xmm0`);
