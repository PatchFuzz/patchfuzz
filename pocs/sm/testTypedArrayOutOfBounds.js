function f1() {
    var a = new Int32Array(50);
    for (var i=0; i<100; i++) {
        var x = a[i];
        print(typeof x, i < a.length ? "number" : "undefined");
    }

    var b = new Float32Array(50);
    for (var i=0; i<100; i++) {
        var x = b[i];
        print(typeof x, i < b.length ? "number" : "undefined");
    }
}
f1();

function f2() {
    
    
    
    Object.prototype[50] = 4.4;
    Object.prototype[55] = Math;

    var a = new Int16Array(50);
    for (var i=0; i<100; i++) {
        var x = a[i];
        if (i < a.length)
            print(x, 0);
        else
            print(x, undefined);
    }
}
f2();
