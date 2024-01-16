



function set_x(v) {
  x = v;
}

var o = {};
set_x(o);
set_x(o);
assertEquals(o, x);
Object.defineProperty(this, "x", { value:5, writable:false, configurable:true });
assertEquals(5, x);
set_x(o);
set_x(o);
assertEquals(5, x);
Object.defineProperty(this, "x", { value:42, writable:true, configurable:true });
assertEquals(42, x);
set_x(o);
assertEquals(o, x);
