

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
assertEq(done, true);  
assertEq(m.size, 50);
assertEq(m.get(""), 0);
assertEq(m.get("....."), 5);
assertEq(m.get(Array(49+1).join(".")), 49);
assertEq(m.has(undefined), false);
