var arr = [{}, {}, {}, [], /xyz/, new Date];
var set = new Set(arr);
print(set.size, arr.length);

var i = 0;
for (var x of set)
    print(x, arr[i++]);
print(i, arr.length);

