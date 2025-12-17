for(p in 0.3) { }

Number.prototype.foo = function() {}
var arr = [];

for(p in 1.2) {
    arr.push(p);
}
print(arr[0], "foo");
