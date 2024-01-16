


























this.__proto__ = null;
this.x = 10;
delete this.x;

function s(v) {
  return v.x = 1;
}

function s_strict(v) {
  "use strict";
  return v.x = 1;
}

function c() {
  var o = {__proto__:this};
  return o;
}

var o1 = c();
var o2 = c();
var o1_strict = c();
var o2_strict = c();
var o3 = c();
var o4 = c();


s(o1);
s(o2);
s_strict(o1_strict);
s_strict(o2_strict);

Object.defineProperty(this, "x", {writable:false, configurable:true});


o3.x = 1;
assertEquals(undefined, o3.x);


assertThrows("s_strict(o4)", TypeError);
s(o4);
assertEquals(undefined, o4.x);
