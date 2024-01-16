


























Object.defineProperty(this, "x", { writable:true });

function s(v) {
  v.x = 1;
}

function s_strict(v) {
  "use strict";
  v.x = 1;
}

function c(p) {
  return {__proto__: p};
}

var o1 = c(this);
var o2 = c(this);


s(c(this));
s(c(this));
s_strict(c(this));
s_strict(c(this));


Object.defineProperty(this, "x", { writable:false, value:5 });


o1.x = 20;
assertEquals(5, o1.x);


s(o2);
assertEquals(5, o2.x);
assertThrows("s_strict(o2);", TypeError);
