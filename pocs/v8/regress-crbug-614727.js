"use strict";

function f(a, b, c) { return arguments }
function g(...args) { return args }




var length = Math.pow(2, 15) * 3;
var args = new Array(length);
print(length, f.apply(null, args).length);
print(length, g.apply(null, args).length);



var length = Math.pow(2, 16) * 3;
var args = new Array(length);
try { f.apply(null, args) } catch(e) {}
try { g.apply(null, args) } catch(e) {}
