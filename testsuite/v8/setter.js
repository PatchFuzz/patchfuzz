


























function s(v) {
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
var o5 = c(p);


s(o1);
s(o2);


var count = 0;
Object.defineProperty(p, "x", {
  set: function(x) {
    count += 1;
  }
});


o3.x = 20;
assertEquals(1, count);


s(o4);
assertEquals(2, count);


s(o5);
assertEquals(3, count);
