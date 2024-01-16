

















var memTypes = [''];
if (wasmMemory64Enabled()) {
    memTypes.push('i64')
}

for ( let memType of memTypes ) {
    let dataType = memType ? memType : 'i32';

    
    
    codegenTestX64_adhoc(
`(module
   (memory ${memType} 1)
   (func (export "f") (param ${dataType}) (result i32)
     (local ${dataType})
     (local.set 1 (${dataType}.add (local.get 0) (${dataType}.const 8)))
     (i32.load (local.get 1))
     drop
     (i32.load (local.get 1))))`,
    'f', `
48 3b ..                  cmp %r.., %r..
0f 83 .. 00 00 00         jnb 0x00000000000000..
41 8b .. ..               movl \\(%r15,%r..,1\\), %e..
41 8b .. ..               movl \\(%r15,%r..,1\\), %eax`,
        {no_prefix:true});

    
    
    codegenTestX64_adhoc(
`(module
   (memory ${memType} 1)
   (func (export "f") (result i32)
     (i32.load (${dataType}.const 16))))`,
    'f',
    `41 8b 47 10               movl 0x10\\(%r15\\), %eax`);

    
    
    
    codegenTestX64_adhoc(
`(module
   (memory ${memType} 1)
   (func (export "f") (result i32)
     (i32.load (${dataType}.const 65535))))`,
    'f',
`
b8 ff ff 00 00            mov \\$0xFFFF, %eax
41 8b 04 07               movl \\(%r15,%rax,1\\), %eax`);
}

