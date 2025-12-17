(function(){
    var obj6 = 1;
    LABEL0:
    LABEL1:
    for (var __loopvar0 = 0; obj6.a < (1) && __loopvar0 < 3; obj6.a++ + __loopvar0++) {
    }
})();







(function() {
    var o1 = { a: 0 };
    var o2 = o1;
    for (var i = 0; i < 1; ++i)
        for (; o2.a < 1; ++o2.a)
            o1.a = 1;
})();

function test0() {
    function test0a(o) {
        o.p = "1";
    }

    
    
    
    
    
    
    
    
    
    function test0b(o) {
        var sum = 0;
        for (var i = 0; i < 10; ++i) {
            sum += o.p &= 1;
            for (var j = 0; j < 10; ++j) {
                sum += o.p | 0;
                o.q = test0a(o);
            }
            sum += o.p | 0;
        }

        return sum;
    }

    return test0b({ p: 1, q: 1 });
}
print("test0: " + test0());






function test1() {
    var c = 1;
    function test1a() {
        var a;
        for (var i = 0; i < 1; ++i) {
            var b = a = c ? 1 : 2;
            for (var j = 0; j < 1; ++j)
                a = a;
        }
        function test1aa() { a; }
        return a;
    }
    return test1a();
}
print("test1: " + test1());








function test2() {
    var a, b, c;
    for (var i = 0; i < 1; ++i) {
        a |= 0;
        b = 0;
        for (var j = 0; j < 1; ++j) {
            0 ? b : 0;
            null ? b = test2a() : a;
            c = a;
        }
    }
    function test2a() { a, b; }
    return c;
}
print("test2: " + test2());











function test3() {
    var a = 0;
    var b = 0;
    for (var i = 0; b !== 1 && i < 1; ++i) {
        b = -158506649.9 >> 1;
        for (var j = 0; j < 8; ++j) {
            test3a();
            ++a;
            for (var k = 0; (b >>= b) && k < 1; ++k)
                a >>>= 1;
        }
    }
    return a;

    function test3a() {
        a;
        ++b;
    }
}
print("test3: " + test3());











function test4() {
    var a = 0;
    for (var i = 0; i < 1; ++i) {
        a &= 1;
        for (var j = 0; j < 1; ++j)
            a = 1;
    }
    return a;

    function test4a() { a; }
}
print("test4: " + test4());


function test5() {
    var o = { a: 0 };
    for (var i = 0; i < 1; ++i) {
        o.a &= 1;
        for (var j = 0; j < 1; ++j)
            o.a = 1;
    }
    return o.a;
}
print("test5: " + test5());
