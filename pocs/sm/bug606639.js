function v(s) { eval(s); }
v("eval(function(){})()");
var x = new Int32Array(0);
v("x.set()");
