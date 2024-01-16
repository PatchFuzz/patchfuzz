




var mod = new WebAssembly.Module(readbuffer('misc.wasm'));
var a = new WebAssembly.Instance(mod).exports;
print(a.f32copysign(-40.0,2.0)); 
print(a.f32copysign(-40.0,-2.0)); 
print(a.f32copysign(-1.0,2.0)); 
print(a.f32copysign(-1.0,-2.0)); 
print(a.f32copysign(255.0,-1.0)); 
print(a.f32copysign(255.0,1.0)); 
print(a.eqz(0)); 
print(a.eqz(-1)); 
print(a.eqz(1)); 
print(a.trunc(0.5)); 
print(a.trunc(-1.5)); 
print(a.trunc(NaN)); 
print(a.trunc(-NaN)); 
print(a.trunc(Infinity)); 
print(a.trunc(-Infinity)); 
print(a.f64trunc(0.5)); 
print(a.f64trunc(-1.5)); 
print(a.f64trunc(NaN)); 
print(a.f64trunc(-NaN)); 
print(a.f64trunc(Infinity)); 
print(a.f64trunc(-Infinity)); 
print(a.ifeqz(0)); 
print(a.ifeqz(-1)); 
print(a.nearest(-0.1)); 
print(a.nearest(-0.7)); 
print(a.nearest(-1.5)); 
print(a.nearest(NaN)); 
print(a.nearest(-NaN)); 
print(a.nearest(Infinity)); 
print(a.nearest(-Infinity)); 
print(a.f64nearest(-0.1)); 
print(a.f64nearest(-0.7)); 
print(a.f64nearest(-1.5)); 
print(a.f64nearest(NaN)); 
print(a.f64nearest(-NaN)); 
print(a.f64nearest(Infinity)); 
print(a.f64nearest(-Infinity)); 
print(a.f64copysign(255.0,-1.0)); 
