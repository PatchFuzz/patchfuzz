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
(movl 0x04\\(%r..\\), %e..\ncmp %e.., %e..|cmpl 0x04\\(%r..\\), %e..)
jnb 0x00000000000000..
movl \\(%r..,%r..,1\\), %e..
movl \\(%r..,%r..,1\\), %eax`,
    {no_prefix:true});



codegenTestX86_adhoc(
`(module
   (memory 1)
   (func (export "f") (result i32)
     (i32.load (i32.const 16))))`,
    'f', `
movl \\(%rsi\\), %e..
movl 0x10\\(%r..\\), %eax`);




codegenTestX86_adhoc(
`(module
   (memory 1)
   (func (export "f") (result i32)
     (i32.load (i32.const 65535))))`,
    'f',
`
movl \\(%rsi\\), %e..
movl 0xFFFF\\(%r..\\), %eax`);
