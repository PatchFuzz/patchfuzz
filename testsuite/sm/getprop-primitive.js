
setJitCompilerOption("offthread-compilation.enable", 0);
gcPreserveCode();

var testSet1 = [1, "", Symbol("a"), true];
var testSet2 = [1, "", Symbol("a"), true, { bar: 5 }];

Number.prototype.bar = 1;
String.prototype.bar = 2;
Symbol.prototype.bar = 3;
Boolean.prototype.bar = 4;

function assertEqIf(prev, curr, expected) {
    
    
    with({}){}
    if (prev) {
        assertEq(curr, expected);
        return false;
    }
    return true;
}

var f;
var template = function (set) {
    var lastX = 0, x = 0, i = 0, y = 0;
    var cont = true;
    while (cont) { 
        for (var i = 0; i < set.length; i++) {
            x = x + (inIon() ? 1 : 0);
            if (set[i].placeholder != set[(i + 1) % set.length].placeholder)
                y += 1;
        }

        
        
        cont = assertEqIf(lastX > 0, x, set.length);
        if (inIon())
            lastX = x;
        x = 0;
    }
    return y;
}


f = eval(`(${template})`.replace(".placeholder", ".foo"));
f(testSet1);


f = eval(`(${template})`.replace(".placeholder", ".foo"));
f(testSet2);


f = eval(`(${template})`.replace(".placeholder", ".bar"));
f(testSet1);


f = eval(`(${template})`.replace(".placeholder", ".bar"));
f(testSet2);
