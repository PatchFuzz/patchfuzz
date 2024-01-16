




var buffer = new ArrayBuffer(1<<20);
eval('print((function (stdlib,foreign,buffer) { "use asm"; var f64 = new stdlib.Float64Array(buffer); function f1(){ var f64 = 1.; f64[0] = 0.0;return +0.0;} return f1;})(this,{},buffer)())');
eval('print((function (stdlib,foreign,buffer) { "use asm"; var f64 = new stdlib.Float64Array(buffer); function f1(){ var f64 = 1.; return +f64[0];} return f1;})(this,{},buffer)())');
eval('print((function (stdlib,foreign,buffer) { "use asm"; const a = 10; function f1(){ var a =0; var b = a; return b|0;} return f1;})(this,{},buffer)())');

var f64Arr = new Float64Array(buffer);
print(f64Arr[0]);