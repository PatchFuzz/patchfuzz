(function() {
    function roundf(y) {
        return Math.round(Math.fround(y));
    }

    var x = -1;
    print(roundf(x), x);
    print(roundf(x), x);

    var x = -2;
    print(roundf(x), x);
    print(roundf(x), x);

    var x = -1024;
    print(roundf(x), x);

    var x = -14680050;
    print(roundf(x), Math.fround(x));

    var x = -8388610;
    print(roundf(x), Math.fround(x));
})();


(function() {
    function f() {
        var d = Math.fround(0.4999999701976776);
        return Math.round(d);
    }
    print(f(), f());

    function g() {
        var c = Math.fround(8886111);
        return Math.round(c);
    }
    print(g(), g());
})();


(function() {
    function h(x) {
        var y = Math.fround(x);
        print(y, Math.pow(y, 1));
    }
    h(0);
    h(2147483647);
})();


(function() {
    function f() {
        return Math.round(Math.fround(-13527757));
    };
    print(f(), f());
})();

(function() {
    
    var f32 = new Float32Array(1);
    var i32 = new Int32Array(f32.buffer);

    function round(x) { return Math.round(x); }
    function roundf(x) { return Math.round(Math.fround(x)); }

    
    round(2.5);
    round(3.5);
    roundf(2.5);
    roundf(3.5);

    f32[0] = 0.5;
    i32[0] += 1;
    print('0.5+e =', f32[0]);

    var x = f32[0];
    print(round(x), 1);
    print(roundf(x), 1);

    f32[0] = 0.5;
    i32[0] -= 1;
    print('0.5-e =', f32[0]);

    var x = f32[0];
    print(round(x), 0);
    print(roundf(x), 0);

    f32[0] = -0.5;
    i32[0] += 1;
    print('-0.5-e =', f32[0]);

    var x = f32[0];
    print(round(x), -1);
    print(roundf(x), -1);

    f32[0] = -0.5;
    i32[0] -= 1;
    print('-0.5+e =', f32[0]);

    var x = f32[0];
    print(round(x), -0);
    print(roundf(x), -0);
})();
