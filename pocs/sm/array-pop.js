function f(arr) {
    var x;
    for (var i=0; i<100; i++) {
        x = arr.pop();
    }
    return x;
}

var arr = [];
for (var i=0; i<130; i++) {
    arr.push({i: i});
}

print(f(arr).i, 30);
print(arr.length, 30);
print(f(arr), undefined);
print(arr.length, 0);
