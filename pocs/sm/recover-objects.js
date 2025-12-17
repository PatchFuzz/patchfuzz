var max = 200;




if (getJitCompilerOptions()["ion.warmup.trigger"] <= max - 10)
    setJitCompilerOption("ion.warmup.trigger", max - 10);



setJitCompilerOption("ion.warmup.trigger", getJitCompilerOptions()["ion.warmup.trigger"]);




if (getJitCompilerOptions()["ion.forceinlineCaches"])
    setJitCompilerOption("ion.forceinlineCaches", 0);


gczeal(0);

function resumeHere() {}
var uceFault = function (i) {
    if (i > max - 2)
        uceFault = function (i) { return true; };
    return false;
};




function inline_notSoEmpty1(a, b, c, d) {
    
    
    return { v: (a.v + b.v + c.v + d.v - 10) / 4 };
}
var uceFault_notSoEmpty1 = eval(`(${uceFault})`.replace('uceFault', 'uceFault_notSoEmpty1'));
function notSoEmpty1() {
    var a = { v: i };
    var b = { v: 1 + a.v };
    var c = { v: 2 + b.v };
    var d = { v: 3 + c.v };
    var unused = { v: 4 + d.v };
    var res = inline_notSoEmpty1(a, b, c, d);
    if (uceFault_notSoEmpty1(i) || uceFault_notSoEmpty1(i))
        print(i, res.v);
    
    
    
    
    print(a, true);
    print(b, true);
    print(c, true);
    print(d, true);
    print(unused, true);
    
    
    
    print(res, true);
}


function inline_notSoEmpty2(a, b, c, d) {
    "use strict";
    return { v: (a.v + b.v + c.v + d.v - 10) / 4 };
}
var uceFault_notSoEmpty2 = eval(`(${uceFault})`.replace('uceFault', 'uceFault_notSoEmpty2'));
function notSoEmpty2(i) {
    var a = { v: i };
    var b = { v: 1 + a.v };
    var c = { v: 2 + b.v };
    var d = { v: 3 + c.v };
    var unused = { v: 4 + d.v };
    var res = inline_notSoEmpty2(a, b, c, d);
    if (uceFault_notSoEmpty2(i) || uceFault_notSoEmpty2(i))
        print(i, res.v);
    print(a, true);
    print(b, true);
    print(c, true);
    print(d, true);
    print(unused, true);
    
    
    
    print(res, true);
}


var argFault_observeArg = function (i) {
    if (i > max - 2)
        return inline_observeArg.arguments[0];
    return { test : i };
};
function inline_observeArg(obj, i) {
    return argFault_observeArg(i);
}
function observeArg(i) {
    var obj = { test: i };
    var res = inline_observeArg(obj, i);
    print(res.test, i);
    print(obj, true);
}


function complexPhi(i) {
    var obj = { test: i };
    switch (i) { 
        case 0: obj.test = 0; break;
        case 1: obj.test = 1; break;
        case 2: obj.test = 2; break;
        case 3: case 4: case 5: case 6:
        default: obj.test = i; break;
        case 7: obj.test = 7; break;
        case 8: obj.test = 8; break;
        case 9: obj.test = 9; break;
    }
    print(obj.test, i);
    print(obj, true);
}


function withinIf(i) {
    var x = undefined;
    if (i % 2 == 0) {
        let obj = { foo: i };
        x = obj.foo;
        print(obj, true);
        obj = undefined;
    } else {
        let obj = { bar: i };
        x = obj.bar;
        print(obj, true);
        obj = undefined;
    }
    print(x, i);
}


function unknownLoad(i) {
    var obj = { foo: i };
    
    print(obj.bar, undefined);
    print(obj, true);
}





function dynamicSlots(i) {
    var obj = {
        p0: i + 0, p1: i + 1, p2: i + 2, p3: i + 3, p4: i + 4, p5: i + 5, p6: i + 6, p7: i + 7, p8: i + 8, p9: i + 9, p10: i + 10,
        p11: i + 11, p12: i + 12, p13: i + 13, p14: i + 14, p15: i + 15, p16: i + 16, p17: i + 17, p18: i + 18, p19: i + 19, p20: i + 20,
        p21: i + 21, p22: i + 22, p23: i + 23, p24: i + 24, p25: i + 25, p26: i + 26, p27: i + 27, p28: i + 28, p29: i + 29, p30: i + 30,
        p31: i + 31, p32: i + 32, p33: i + 33, p34: i + 34, p35: i + 35, p36: i + 36, p37: i + 37, p38: i + 38, p39: i + 39, p40: i + 40,
        p41: i + 41, p42: i + 42, p43: i + 43, p44: i + 44, p45: i + 45, p46: i + 46, p47: i + 47, p48: i + 48, p49: i + 49, p50: i + 50
    };
    
    
    
    resumeHere(); bailout();
    print(obj.p0 + obj.p10 + obj.p20 + obj.p30 + obj.p40, 5 * i + 100);
    print(obj, true);
}


function Point(x, y)
{
    this.x = x;
    this.y = y;
}

function createThisWithTemplate(i)
{
    var p = new Point(i - 1, i + 1);
    bailout();
    print(p.y - p.x, 2);
    print(p, true);
}

function testNewObject1(i) {
    var o = { a: 1 };
    print(o, true);
    return o.a;
}

var objIdx = 0;
var uceFault_notSoEmpty3 = eval(`(${uceFault})`.replace('uceFault', 'uceFault_notSoEmpty3'));
function testNewObjectWithBranchPruning(i) {
    let obj = {};
    let idx = objIdx++;
    if (uceFault_notSoEmpty3(i) || uceFault_notSoEmpty3(i)) {
        
        
        
        obj.idx = idx;
        obj.a = 1;
        obj.b = 2;
        return obj;
    }
    print(obj, true);
    return idx;
}

for (var i = 0; i < max; i++) {
    notSoEmpty1(i);
    notSoEmpty2(i);
    observeArg(i);
    complexPhi(i);
    withinIf(i);
    dynamicSlots(i);
    testNewObject1(i);
    testNewObjectWithBranchPruning(i);
    unknownLoad(i);

    
    
}

let o = testNewObjectWithBranchPruning(-1);
print(o.a, 1);
print(o.b, 2);
