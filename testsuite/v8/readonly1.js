


























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

var p = {};

var o1 = c(p);
var o2 = c(p);
var o3 = c(p);
var o4 = c(p);




p.y = 1;
delete p.y;
p.x = 5;


s(o1);
s(o2);
s_strict(o1);
s_strict(o2);


Object.defineProperty(p, "x", { writable: false });


o3.x = 20;
assertEquals(5, o3.x);


s(o4);
assertEquals(5, o4.x);
assertThrows("s_strict(o4);", TypeError);
