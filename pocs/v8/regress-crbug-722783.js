function set_x(v) {
  x = v;
}

var o = {};
set_x(o);
set_x(o);
print(o, x);
Object.defineProperty(this, "x", { value:5, writable:false, configurable:true });
print(5, x);
set_x(o);
set_x(o);
print(5, x);
Object.defineProperty(this, "x", { value:42, writable:true, configurable:true });
print(42, x);
set_x(o);
print(o, x);
