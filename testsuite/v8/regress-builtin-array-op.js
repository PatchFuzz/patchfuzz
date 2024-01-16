





























var foo =  "hest";
Array.prototype.sort = function(fn) { foo = "fisk"; };
Function.prototype.call = function() { foo = "caramel"; };
var a = [2,3,1];
a[100000] = 0;
a.join();
assertEquals("hest", foo);
