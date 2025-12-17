var memTypes = ['i32', 'i64'];

for ( let memType of memTypes ) {
    
    
    codegenTestX64_adhoc(
`(module
   (memory ${memType} 1)
   (func (export "f") (param ${memType}) (result i32)
     (local ${memType})
     (local.set 1 (${memType}.add (local.get 0) (${memType}.const 8)))
     (i32.load (local.get 1))
     drop
     (i32.load (local.get 1))))`,
    'f', `
(movq 0x08\\(%r..\\), %r..\ncmp %r.., %r..|cmpq 0x08\\(%r..\\), %r..)
jnb 0x00000000000000..
movl \\(%r..,%r..,1\\), %e..
movl \\(%r..,%r..,1\\), %eax`,
        {no_prefix:true});

    
    
    codegenTestX64_adhoc(
`(module
   (memory ${memType} 1)
   (func (export "f") (result i32)
     (i32.load (${memType}.const 16))))`,
    'f',
    `movl 0x10\\(%r15\\), %eax`);

    
    
    
    codegenTestX64_adhoc(
`(module
   (memory ${memType} 1)
   (func (export "f") (result i32)
     (i32.load (${memType}.const 65535))))`,
    'f',
`
mov \\$0xFFFF, %eax
movl \\(%r15,%rax,1\\), %eax`);
}
