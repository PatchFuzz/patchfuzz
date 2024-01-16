



"use strict";

function h(global) { return global.boom(); }
function g() { var r = h({}); return r; }
function f() {
  var o = {};
  o.__defineGetter__('prop1', g);
  o.prop1;
}

assertThrows(f);
