

var t1 = 100;
function test1(x) {
    
    
    for (var i = 0; i < 90; i++) {
        f1(x);
        if (i >= 80)
            t1;
    }
}

function f1(x) {};
test1(2);

var t2 = 100;
function test2(g) {
    
    
    for (var i = 0; i < 90; i++) {
        g();
        if (i >= 80)
            t2;
    }
}

function f2() {};
test2(f2);
