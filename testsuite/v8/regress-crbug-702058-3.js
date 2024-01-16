





var arr = [];
for (var i = 0; i < 100000; i++) arr[i] = [];
var fromIndex = {valueOf: function() { arr.length = 0; }};
arr.indexOf({}, fromIndex);
