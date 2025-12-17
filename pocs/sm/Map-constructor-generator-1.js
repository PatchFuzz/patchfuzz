var done = false;
function* data(n) {
    var s = '';
    for (var i = 0; i < n; i++) {
        yield [s, i];
        s += '.';
    }
    done = true;
}

var m = new Map(data(50));
print(done, true);  
print(m.size, 50);
print(m.get(""), 0);
print(m.get("....."), 5);
print(m.get(Array(49+1).join(".")), 49);
print(m.has(undefined), false);
