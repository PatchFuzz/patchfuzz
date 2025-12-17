var expr = '(local.get 0)';

for (var i = 1000; i --> 0; ) {
    expr = `(f32.neg ${expr})`;
}

var code = `(module
 (func
  (param f32)
  (result f32)
  ${expr}
 )
 (export "run" (func 0))
)`;

try {
    wasmFullPass(code, Math.fround(13.37), {}, 13.37);
} catch (e) {
    
    
    
    
    print(e.message.includes('out of memory'), true);
}
