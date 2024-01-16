





var arr = [];
for (var i = 0; i < 100000; i++) arr[i] = 0.1;
var fromIndex = {valueOf: function() { arr.length = 0; }};
arr.indexOf(1.1, fromIndex);
