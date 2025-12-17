function Module(stdlib, imports, buffer) {
  "use asm";
  var x = new stdlib.Int8Array(buffer);
  function f() {
    return x[0] | 0;
  }
  return { f:f };
}

var b = new ArrayBuffer(1024);
var m1 = Module({ Int8Array:Int8Array }, {}, b);
print(0, m1.f());

var was_called = 0;
function observer() { was_called++; return [23]; }
var m2 = Module({ Int8Array:observer }, {}, b);
print(1, was_called);
print(23, m2.f());
