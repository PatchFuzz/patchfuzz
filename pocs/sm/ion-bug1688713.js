codegenTestX64_adhoc(
`(module
   (memory 1)
   (func $f (export "f") (param i32) (param i32) (param i32) (param i32) (param i32) (result v128)
     (i32x4.add (v128.load8x8_s (local.get 4)) (v128.load8x8_s (local.get 2)))))`,
    'f',
    `pmovsxbwq \\(%r15,%r(8|9|10|11|12|13),1\\), %xmm[0-9]+`,
    {no_prefix: true, no_suffix: true, log:true});
