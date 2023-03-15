














codegenTestX86_adhoc(
`(module
   (memory 1)
   (func (export "f") (param i32) (result i32)
     (local i32)
     (local.set 1 (i32.add (local.get 0) (i32.const 4)))
     (i32.load (local.get 1))
     drop
     (i32.load (local.get 1))))`,
    'f', `
3b ..                     cmp %e.., %e..
0f 83 .. 00 00 00         jnb 0x00000000000000..
8b .. ..                  movl \\(%r..,%r..,1\\), %e..
8b .. ..                  movl \\(%r..,%r..,1\\), %eax`,
    {no_prefix:true});



codegenTestX86_adhoc(
`(module
   (memory 1)
   (func (export "f") (result i32)
     (i32.load (i32.const 16))))`,
    'f', `
8b ..                     movl \\(%rsi\\), %e..
8b .. 10                  movl 0x10\\(%r..\\), %eax`);




codegenTestX86_adhoc(
`(module
   (memory 1)
   (func (export "f") (result i32)
     (i32.load (i32.const 65535))))`,
    'f',
`
8b ..                     movl \\(%rsi\\), %e..
8b .. ff ff 00 00         movl 0xFFFF\\(%r..\\), %eax`);
