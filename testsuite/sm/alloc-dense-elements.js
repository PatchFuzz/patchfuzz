function f() {
    for (var i=0; i<100; i++) {
        
        var o = (i == 20) ? new Int32Array(1) : {};
        o[0] = i;
        assertEq(o[0], i);
    }
}
f();
