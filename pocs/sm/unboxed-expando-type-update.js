function f() {
    var a = [];
    for (var i=0; i<100; i++)
        a.push({x: i});

    var vals = [1, "", true, null];

    for (var j=0; j<100; j++) {
        var v = vals[j % vals.length];
        a[95].y = v;
        print(a[95].y, v);
        a[j].z1 = v;
        a[j].z2 = v;
        print(a[j].z1, v);
        print(a[j].z2, v);
    }
}
f();
