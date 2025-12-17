function fillConstantFloat32() {
  var f32 = new Float32Array(1);
  for (var i = 0; i < 100; ++i) {
    f32.fill(0);
    print(f32[0], 0);

    f32.fill(1);
    print(f32[0], 1);

    f32.fill(1.0000079870224);
    print(f32[0], 1.0000079870224);

    f32.fill(1.2);
    print(f32[0], 1.2000000476837158);
  }
}
fillConstantFloat32();


function fillExplicitFloat32() {
  var f32 = new Float32Array(1);
  for (var i = 0; i < 100; ++i) {
    
    
    
    var v = [i, i][i & 1];

    
    var f = Math.sqrt(Math.fround(v));

    
    f32.fill(Math.fround(f));

    print(f32[0], Math.fround(f));
  }
}
fillExplicitFloat32();


function fillImplicitFloat32() {
  var f32 = new Float32Array(1);
  for (var i = 0; i < 100; ++i) {
    
    
    
    var v = [i, i][i & 1];

    
    var f = Math.sqrt(Math.fround(v));

    
    f32.fill(f);

    print(f32[0], Math.fround(f));
  }
}
fillImplicitFloat32();
