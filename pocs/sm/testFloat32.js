if (getJitCompilerOptions()["ion.forceinlineCaches"])
    setJitCompilerOption("ion.forceinlineCaches", 0);


(function(){
    
    (function(){
        var g = {};
        x = new Float32Array()
        Function('g', "g.o = x[1]")(g);
    })();
    
    (function() {
        var g = new Float32Array(16);
        var h = new Float64Array(16);
        var farrays = [ g, h ];
        for (aridx = 0; aridx < farrays.length; ++aridx) {
            ar  = farrays[aridx];
            !(ar[ar.length-2] == (NaN / Infinity)[ar.length-2])
        }
    })();
    
    (function () {
        var v = new Float32Array(32);
        for (var i = 0; i < v.length; ++i)
        v[i] = i;
    var t = (false  );
    for (var i = 0; i < i .length; ++i)
        t += v[i];
    })();
    
    (function() {
        x = y = {};
        z = new Float32Array(6)
        for (c in this) {
            Array.prototype.unshift.call(x, new ArrayBuffer())
        }
        Array.prototype.sort.call(x, (function (j) {
            y.s = z[2]
        }))
    })();
    
    (function() {
        
        for (var k = 0; k < 1; k++) {
            Math.fround(Math.ceil(Math.fround(Math.acos(3.0))))
        }
    })();
})();










setJitCompilerOption("ion.warmup.trigger", 50);

function test(f) {
    f32[0] = .5;
    for(var n = 110; n; n--)
        f();
}

var f32 = new Float32Array(4);
var f64 = new Float64Array(4);

function acceptAdd() {
    var use = f32[0] + 1;
    print(use, true);
    f32[0] = use;
}
test(acceptAdd);

function acceptAddSeveral() {
    var sum1 = f32[0] + 0.5;
    var sum2 = f32[0] + 0.5;
    f32[0] = sum1;
    f32[0] = sum2;
    print(sum1, true);
    print(sum2, true);
}
test(acceptAddSeveral);

function acceptAddVar() {
    var x = f32[0] + 1;
    f32[0] = x;
    f32[1] = x;
    print(x, true);
}
test(acceptAddVar);

function refuseAddCst() {
    var x = f32[0] + 1234567890; 
    f32[0] = x;
    print(x, false);
}
test(refuseAddCst);

function refuseAddVar() {
    var x = f32[0] + 1;
    f32[0] = x;
    f32[1] = x;
    f64[1] = x; 
    print(x, false);
}
test(refuseAddVar);

function refuseAddStore64() {
    var x = f32[0] + 1;
    f64[0] = x; 
    f32[0] = f64[0];
    print(x, false);
}
test(refuseAddStore64);

function refuseAddStoreObj() {
    var o = {}
    var x = f32[0] + 1;
    o.x = x; 
    f32[0] = o['x'];
    print(x, false);
}
test(refuseAddStoreObj);

function refuseAddSeveral() {
    var sum = (f32[0] + 2) - 1; 
    f32[0] = sum;
    print(sum, false);
}
test(refuseAddSeveral);

function refuseAddFunctionCall() {
    function plusOne(x) { return Math.cos(x+1)*13.37; }
    var res = plusOne(f32[0]); 
    f32[0] = res;
    print(res, false);
}
test(refuseAddFunctionCall);

function acceptSqrt() {
    var res = Math.sqrt(f32[0]);
    print(res, true);
    f32[0] = res;
}
test(acceptSqrt);

function refuseSqrt() {
    var res = Math.sqrt(f32[0]);
    print(res, false);
    f32[0] = res + 1;
}
test(refuseSqrt);

function acceptMin() {
    var res = Math.min(f32[0], f32[1]);
    print(res, true);
    f64[0] = res;
}
test(acceptMin);





function refuseMinAdd() {
    var res = Math.min(f32[0], f32[1]) + f32[2];
    print(res, false);
    f32[3] = res;
}
test(refuseMinAdd);

function acceptSeveralMinMax() {
    var x = Math.min(f32[0], f32[1]);
    var y = Math.max(f32[2], f32[3]);
    var res = Math.min(x, y);
    print(res, true);
    f64[0] = res;
}
test(acceptSeveralMinMax);

function acceptSeveralMinMax2() {
    var res = Math.min(f32[0], f32[1], f32[2], f32[3]);
    print(res, true);
    f64[0] = res;
}
test(acceptSeveralMinMax2);

function partialMinMax() {
    var x = Math.min(f32[0], f32[1]);
    var y = Math.min(f64[0], f32[1]);
    var res  = Math.min(x, y);
    print(x, true);
    print(y, false);
    print(res, false);
    f64[0] = res;
}
test(partialMinMax);

function refuseSeveralMinMax() {
    var res = Math.min(f32[0], f32[1] + f32[2], f32[2], f32[3]);
    print(res, false);
    f64[0] = res;
}
test(refuseSeveralMinMax);

function refuseMin() {
    var res = Math.min(f32[0], 42.13 + f32[1]);
    print(res, false);
    f64[0] = res;
}
test(refuseMin);

function acceptMax() {
    var res = Math.max(f32[0], f32[1]);
    print(res, true);
    f64[0] = res;
}
test(acceptMax);

function refuseMax() {
    var res = Math.max(f32[0], 42.13 + f32[1]);
    print(res, false);
    f64[0] = res;
}
test(refuseMax);

function acceptAbs() {
    var res = Math.abs(f32[0]);
    print(res, true);
    f32[0] = res;
}
test(acceptAbs);

function refuseAbs() {
    var res = Math.abs(f32[0]);
    print(res, false);
    f64[0] = res + 1;
}
test(refuseAbs);

function acceptFilterTypeSet() {
    var res = f32[0];
    if (!res) {
    } else {
        f32[0] = res;
        print(res, true);
    }
}
test(acceptFilterTypeSet);

function acceptFilterTypeSet2() {
    var res = f32[0];
    if (!res) {
    } else {
        var res1 = Math.abs(res);
        f32[0] = res1;
        print(res1, true);
    }
}
test(acceptFilterTypeSet2);

function refuseFilterTypeSet() {
    var res = f32[0];
    if (!res) {
    } else {
        var res1 = Math.abs(res);
        f64[0] = res1 + 1;
        print(res1, false);
    }
}
test(refuseFilterTypeSet);

function refuseTrigo() {
    var res = Math.cos(f32[0]);
    f32[0] = res;
    print(res, false);

    var res = Math.sin(f32[0]);
    f32[0] = res;
    print(res, false);

    var res = Math.tan(f32[0]);
    f32[0] = res;
    print(res, false);

    var res = Math.acos(f32[0]);
    f32[0] = res;
    print(res, false);

    var res = Math.asin(f32[0]);
    f32[0] = res;
    print(res, false);

    res = Math.atan(f32[0]);
    f32[0] = res;
    print(res, false);
}
test(refuseTrigo);

function acceptCeil() {
    
    f32[0] = NaN;
    f32[1] = Infinity;
    f32[2] = -0;
    f32[3] = 0.5;

    var res = Math.ceil(f32[0]);
    f32[0] = res;
    print(res, true);
}
test(acceptCeil);

function acceptFloor() {
    
    f32[0] = NaN;
    f32[1] = Infinity;
    f32[2] = -0;
    f32[3] = 0.5;

    var res = Math.floor(f32[0]);
    f32[0] = res;
    print(res, true);
}
test(acceptFloor);

function acceptRound() {
    
    f32[0] = NaN;
    f32[1] = Infinity;
    f32[2] = -0;
    f32[3] = 0.5;

    var res = Math.round(f32[0]);
    f32[0] = res;
    print(res, true);
}
test(acceptRound);

function acceptTrunc() {
    
    f32[0] = NaN;
    f32[1] = Infinity;
    f32[2] = -0;
    f32[3] = 0.5;

    var res = Math.trunc(f32[0]);
    f32[0] = res;
    print(res, true);
}
test(acceptTrunc);

function refuseMath() {
    var res = Math.log(f32[0]);
    f32[0] = res;
    print(res, false);

    var res = Math.log10(f32[0]);
    f32[0] = res;
    print(res, false);

    res = Math.log2(f32[0]);
    f32[0] = res;
    print(res, false);

    res = Math.log1p(f32[0]);
    f32[0] = res;
    print(res, false);

    res = Math.exp(f32[0]);
    f32[0] = res;
    print(res, false);

    res = Math.expm1(f32[0]);
    f32[0] = res;
    print(res, false);

    res = Math.cosh(f32[0]);
    f32[0] = res;
    print(res, false);

    res = Math.sinh(f32[0]);
    f32[0] = res;
    print(res, false);

    res = Math.tanh(f32[0]);
    f32[0] = res;
    print(res, false);

    res = Math.acosh(f32[0]);
    f32[0] = res;
    print(res, false);

    res = Math.asinh(f32[0]);
    f32[0] = res;
    print(res, false);

    res = Math.atanh(f32[0]);
    f32[0] = res;
    print(res, false);

    res = Math.cbrt(f32[0]);
    f32[0] = res;
    print(res, false);

    res = Math.sign(f32[0]);
    f32[0] = res;
    print(res, false);
}
test(refuseMath);

function refuseLoop() {
    var res = f32[0],
        n = 10;
    while (n--) {
        res = res + 1; 
        print(res, false);
    }
    print(res, false);
    f32[0] = res;
}
test(refuseLoop);

function acceptLoop() {
    
    return;

    var res = f32[0],
        n = 10;
    while (n--) {
        var sum = res + 1;
        res = Math.fround(sum);
        print(sum, true);
    }
    print(res, true);
    f32[0] = res;
}
test(acceptLoop);

function alternateCond(n) {
    var x = f32[0];
    if (n > 0) {
        var s1 = x + 1;
        f32[0] = s1;
        print(s1, true);
    } else {
        var s2 = x + 1;
        f64[0] = s2; 
        print(s2, false);
    }
}
(function() {
    f32[0] = 0;
    for (var n = 110; n; n--) {
        alternateCond(n % 2);
    }
})();

function phiTest(n) {
    
    return;

    var x = (f32[0]);
    var y = n;
    if (n > 0) {
        x = x + 2;
        print(x, true);
    } else {
        if (n < -10) {
            x = Math.fround(Math.sqrt(y));
            print(x, true);
        } else {
            x = x - 1;
            print(x, true);
        }
    }
    print(x, true);
    f32[0] = x;
}
(function() {
    f32[0] = 0;
    for (var n = 100; n; n--) {
        phiTest( ((n % 3) - 1) * 15 );
    }
})();

function mixedPhiTest(n) {
    
    return;

    var x = (f32[0]);
    var y = n;
    if (n > 0) {
        x = x + 2; 
        print(x, false);
    } else {
        if (n < -10) {
            x = Math.fround(Math.sqrt(y)); 
            print(x, true);
        } else {
            x = x - 1; 
            print(x, false);
        }
    }
    print(x, false);
    x = x + 1; 
    f32[0] = x;
}
(function() {
    f32[0] = 0;
    for (var n = 100; n; n--) {
        mixedPhiTest( ((n % 3) - 1) * 15 );
    }
})();

function phiTest2(n) {
    
    return;

    var x = f32[0];
    while (n >= 0) {
        x = Math.fround(Math.fround(x) + 1);
        print(x, true);
        if (n < 10) {
            x = f32[0] + 1;
            print(x, true);
        }
        n = n - 1;
    }
}
(function(){
    f32[0] = 0;
    for (var n = 100; n > 10; n--) {
        phiTest2(n);
    }
})();
