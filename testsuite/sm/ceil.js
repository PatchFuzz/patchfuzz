setJitCompilerOption("baseline.warmup.trigger", 10);
setJitCompilerOption("ion.warmup.trigger", 20);


var log = function(x){}

function ceil(x) {
    
    return -Math.floor(-x);
}

function doubleCheck(g) {
    for (var j = 0; j < 200; j++) {
        var i = j;
        assertEq(g(i), i);
        assertEq(g(i+.5), i+1);
        assertEq(g(-i), -i);
        assertEq(g(-i-.5), -i);
    }
}

function floatCheck(g, val) {
    for (var j = 0; j < 200; j++) {
        var i = Math.fround(j);
        assertEq(g(i), i);
        assertEq(g(i+.5), i+1);
        assertEq(g(-i), -i);
        assertEq(g(-i-.5), -i);
    }
}

function testBailout(value) {
    var dceil = eval('(function(x) { return Math.ceil(x) })');
    log('start double');
    doubleCheck(dceil);
    log('bailout');
    
    
    assertEq(dceil(value), ceil(value));

    var fceil = eval('(function(x) { return Math.ceil(Math.fround(x)) })');
    log('start float');
    floatCheck(fceil, value);
    log('bailout');
    assertEq(fceil(Math.fround(value)), ceil(Math.fround(value)));
}

var INT_MAX = Math.pow(2, 31) - 1;
var INT_MIN = INT_MAX + 1 | 0;
var UINT_MAX = Math.pow(2, 32) - 1;


testBailout(-0);
testBailout(-.5);


testBailout(INT_MAX + .5);
testBailout(INT_MIN - 129);

testBailout(UINT_MAX);
testBailout(UINT_MAX + .5);
testBailout(UINT_MAX + 1);
testBailout(UINT_MAX + 2);

testBailout(NaN);
