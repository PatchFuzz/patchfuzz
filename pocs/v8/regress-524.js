var i = 500000
var a = new Array(i)
for (var j = 0; j < i; j++) { var o = {}; o.x = 42; delete o.x; a[j] = o; }
