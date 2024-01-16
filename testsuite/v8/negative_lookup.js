


























function s(v) {
  v.x = 1;
}

function c(p) {
  return {__proto__: p};
}

var p = {};


p.__proto__ = null;

var o1 = c(p);
var o2 = c(p);
var o3 = c(p);
var o4 = c(p);




p.y = 1;
delete p.y;


s(o1);
s(o2);


Object.defineProperty(p, "x", { writable: false, value: 5 });


o3.x = 10;
assertEquals(5, o3.x);


s(o4);
assertEquals(5, o4.x);
