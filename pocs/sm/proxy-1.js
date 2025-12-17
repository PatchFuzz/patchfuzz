var s = '';
var arr = ['a', 'b', 'c', 'd'];
var p = new Proxy(arr, {});


for (var i = 0; i < 2; i++) {
    var j = 0;
    for (var x of p)
        print(x, arr[j++]);
    print(j, arr.length);
}
