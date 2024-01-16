


























var slow = {};
var p = {};

slow.__proto__ = p;
slow.x = 10;
slow.y = 10;
Object.defineProperty(p, "x", {writable:false, value:5});

function c(p) {
  return {__proto__: p};
}

function s(v) {
  return v.x = 1;
}

function s_strict(v) {
  "use strict";
  v.x = 1;
}

var o1 = c(slow);
var o2 = c(slow);
var o1_strict = c(slow);
var o2_strict = c(slow);
var o3 = c(slow);
var o4 = c(slow);




delete slow.y;

s(o1);
s(o2);
s_strict(o1_strict);
s_strict(o2_strict);

delete slow.x;

o3.x = 20
assertEquals(5, o3.x);


s(o4);
assertEquals(5, o4.x);
assertThrows("s_strict(o4);", TypeError);
