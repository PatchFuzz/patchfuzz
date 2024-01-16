




function test0() {
    var a = 0x3fffffff << 1;
    var b = a + 0.1;
    for(var i = 0; i < 2; ++i) {
        for(var j = 0; j < 2; ++j) {
            a &= b;
            -a | 0;
        }
    }
}
test0();
test0();







function test1() {
    var a = 1;
    for(var i = 0; i < 1; ++i) {
        for(var j = 0; j < 1; ++j) {
            if(1)
                a &= 1;
            a & 255;
        }
    }
};
test1();
test1();

function test2() {
    return (2147483648 + 1) | 0;
};
test2();
test2();

function test3() {
    var a = 0;
    var b = 0;
    var c = 0;
    for(var i = 0; i < 2; ++i) {
        if(a) {
            b = ~a;
            test0a();
        }
        c &= b;
    }

    function test3a() { a; }
};
test3();
test3();

function test4() {
    var obj0 = { prop1: 0 };
    var b = 1;
    prop0 = new Float64Array(1)[0];
    var x = 0;
    for(var i = 0; i < 2; ++i) {
        ++x;
        if(obj0.prop1 === prop0) {
            for(var j = 0; j < 1; ++j) {
                if(1.1)
                    obj0 = {};
                else {
                    var k = 0;
                    do {
                        if(k > 0) break;
                        ++k;
                        ++b;
                    } while(1);
                }
            }
        }
    }
    return x;

    function test4a() { b; }
};
WScript.Echo("test4: " + test4());
WScript.Echo("test4: " + test4());

function test5(b) {
    var o = {};
    var a = -2147483646;
    for(var i = 0; o.p && i < 1; ++i) {
        if(1 === 1) {
            if(1)
                a = b;
            [a];
        }
    }
};
test5(1);
test5({});
