function f() {
}


for (var i = 0; i < 10000; i++) {
  f.prototype["b" + i] = 1;
}

var o = new f();

function access(o, k) {
  return o[k];
}


var p = "b";
p += 10001;

print(undefined, access(o, p));
print(undefined, access(o, p));
print(undefined, access(o, p));
f.prototype[p] = 100;
print(100, access(o, p));
