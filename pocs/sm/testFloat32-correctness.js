setJitCompilerOption("ion.warmup.trigger", 50);

var f32 = new Float32Array(10);

function test(setup, f) {
    if (f === undefined) {
        f = setup;
        setup = function(){};
    }
    setup();
    for(var n = 200; n; --n) {
        f();
    }
}


function setupBasicArith() {
    f32[0] = -Infinity;
    f32[1] = -1;
    f32[2] = -0;
    f32[3] = 0;
    f32[4] = 1.337;
    f32[5] = 42;
    f32[6] = Infinity;
    f32[7] = NaN;
}
function basicArith() {
    for (var i = 0; i < 7; ++i) {
        var opf = Math.fround(f32[i] + f32[i+1]);
        var opd = (1 / (1 / f32[i])) + f32[i+1];
        print(opf, true);
        print(opd, false);
        print(opf, Math.fround(opd));

        opf = Math.fround(f32[i] - f32[i+1]);
        opd = (1 / (1 / f32[i])) - f32[i+1];
        print(opf, true);
        print(opd, false);
        print(opf, Math.fround(opd));

        opf = Math.fround(f32[i] * f32[i+1]);
        opd = (1 / (1 / f32[i])) * f32[i+1];
        print(opf, true);
        print(opd, false);
        print(opf, Math.fround(opd));

        opf = Math.fround(f32[i] / f32[i+1]);
        opd = (1 / (1 / f32[i])) / f32[i+1];
        print(opf, true);
        print(opd, false);
        print(opf, Math.fround(opd));
    }
}
test(setupBasicArith, basicArith);


function setupAbs() {
    f32[0] = -0;
    f32[1] = 0;
    f32[2] = -3.14159;
    f32[3] = 3.14159;
    f32[4] = -Infinity;
    f32[5] = Infinity;
    f32[6] = NaN;
}
function abs() {
    for(var i = 0; i < 7; ++i) {
        print( Math.fround(Math.abs(f32[i])), Math.abs(f32[i]) );
    }
}
test(setupAbs, abs);


function setupSqrt() {
    f32[0] = 0;
    f32[1] = 1;
    f32[2] = 4;
    f32[3] = -1;
    f32[4] = Infinity;
    f32[5] = NaN;
    f32[6] = 13.37;
}
function sqrt() {
    for(var i = 0; i < 7; ++i) {
        var sqrtf = Math.fround(Math.sqrt(f32[i]));
        var sqrtd = 1 + Math.sqrt(f32[i]) - 1; 
        print( sqrtf, Math.fround(sqrtd) );
    }
}
test(setupSqrt, sqrt);


function setupMinMax() {
    f32[0] = -0;
    f32[1] = 0;
    f32[2] = 1;
    f32[3] = 4;
    f32[4] = -1;
    f32[5] = Infinity;
    f32[6] = NaN;
    f32[7] = 13.37;
    f32[8] = -Infinity;
    f32[9] = Math.pow(2,31) - 1;
}
function minMax() {
    for(var i = 0; i < 9; ++i) {
        for(var j = 0; j < 9; j++) {
            var minf = Math.fround(Math.min(f32[i], f32[j]));
            var mind = 1 / (1 / Math.min(f32[i], f32[j])); 
            print(minf, true);
            print(mind, false);
            print( minf, Math.fround(mind) );

            var maxf = Math.fround(Math.max(f32[i], f32[j]));
            var maxd = 1 / (1 / Math.max(f32[i], f32[j])); 
            print(maxf, true);
            print(maxd, false);
            print( maxf, Math.fround(maxd) );
        }
    }
}
test(setupMinMax, minMax);



function setupTruncateToInt32() {
    f32[0] = -1;
    f32[1] = 4;
    f32[2] = 5.13;
}
function truncateToInt32() {
    print( Math.imul(f32[0], f32[1]), Math.imul(-1, 4) );
    print( Math.imul(f32[1], f32[2]), Math.imul(4, 5) );
}
test(setupTruncateToInt32, truncateToInt32);


function comp() {
    for(var i = 0; i < 9; ++i) {
        print( f32[i] < f32[i+1], true );
    }
}
function setupComp() {
    f32[0] = -Infinity;
    f32[1] = -1;
    f32[2] = -0.01;
    f32[3] = 0;
    f32[4] = 0.01;
    f32[5] = 1;
    f32[6] = 10;
    f32[7] = 13.37;
    f32[8] = 42;
    f32[9] = Infinity;
}
test(setupComp, comp);


function setupNot() {
    f32[0] = -0;
    f32[1] = 0;
    f32[2] = 1;
    f32[3] = NaN;
    f32[4] = Infinity;
    f32[5] = 42;
    f32[6] = -23;
}
function not() {
    print( !f32[0], true );
    print( !f32[1], true );
    print( !f32[2], false );
    print( !f32[3], true );
    print( !f32[4], false );
    print( !f32[5], false );
    print( !f32[6], false );
}
test(setupNot, not);


var str = "can haz cheezburger? okthxbye;";
function setupToInt32() {
    f32[0] = 0;
    f32[1] = 1;
    f32[2] = 2;
    f32[3] = 4;
    f32[4] = 5;
}
function testToInt32() {
    print(str[f32[0]], 'c');
    print(str[f32[1]], 'a');
    print(str[f32[2]], 'n');
    print(str[f32[3]], 'h');
    print(str[f32[4]], 'a');
}
test(setupToInt32, testToInt32);

function setupBailoutToInt32() {
    f32[0] = .5;
}
function testBailoutToInt32() {
    print(typeof str[f32[0]], 'undefined');
}
test(setupBailoutToInt32, testBailoutToInt32);


function print(a, b) {
    var r = (a != a && b != b) || Math.abs(a-b) < 1e-1 || a === b;
    if (!r) {
        print('Precision error: ');
        print(new Error().stack);
        print('Got', a, ', expected near', b);
        print(false, true);
    }
}

function setupOtherMath() {
    setupComp();
    f32[8] = 4.2;
}
function otherMath() {
    for (var i = 0; i < 9; ++i) {
        print(Math.fround(Math.exp(f32[i])), Math.exp(f32[i]));
        print(Math.fround(Math.log(f32[i])), Math.log(f32[i]));
    }
};
test(setupOtherMath, otherMath);

function setupFloor() {
    f32[0] = -5.5;
    f32[1] = -0.5;
    f32[2] = 0;
    f32[3] = 1.5;
}
function setupFloorDouble() {
    f32[4] = NaN;
    f32[5] = -0;
    f32[6] = Infinity;
    f32[7] = -Infinity;
    f32[8] = Math.pow(2,31); 
}
function testFloor() {
    for (var i = 0; i < 4; ++i) {
        var f = Math.floor(f32[i]);
        print(f, false); 

        var g = Math.floor(-0 + f32[i]);
        print(g, false);

        print(f, g);
    }
}
function testFloorDouble() {
    for (var i = 4; i < 9; ++i) {
        var f = Math.fround(Math.floor(f32[i]));
        print(f, true);

        var g = Math.floor(-0 + f32[i]);
        print(g, false);

        print(f, g);
    }
}
test(setupFloor, testFloor);
test(setupFloorDouble, testFloorDouble);

function setupRound() {
    f32[0] = -5.5;
    f32[1] = -0.6;
    f32[2] = 1.5;
    f32[3] = 1;
}
function setupRoundDouble() {
    f32[4] = NaN;
    f32[5] = -0.49;          
    f32[6] = Infinity;
    f32[7] = -Infinity;
    f32[8] = Math.pow(2,31); 
    f32[9] = -0;
}
function testRound() {
    for (var i = 0; i < 4; ++i) {
        var r32 = Math.round(f32[i]);
        print(r32, false); 

        var r64 = Math.round(-0 + f32[i]);
        print(r64, false);

        print(r32, r64);
    }
}
function testRoundDouble() {
    for (var i = 4; i < 10; ++i) {
        var r32 = Math.fround(Math.round(f32[i]));
        print(r32, true);

        var r64 = Math.round(-0 + f32[i]);
        print(r64, false);

        print(r32, r64);
    }
}
test(setupRound, testRound);
test(setupRoundDouble, testRoundDouble);

function setupCeil() {
    f32[0] = -5.5;
    f32[1] = -1.5;
    f32[2] = 0;
    f32[3] = 1.5;
}
function setupCeilDouble() {
    f32[4] = NaN;
    f32[5] = -0;
    f32[6] = Infinity;
    f32[7] = -Infinity;
    f32[8] = Math.pow(2,31); 
}
function testCeil() {
    for(var i = 0; i < 2; ++i) {
        var f = Math.ceil(f32[i]);
        print(f, false);

        var g = Math.ceil(-0 + f32[i]);
        print(g, false);

        print(f, g);
    }
}
function testCeilDouble() {
    for(var i = 4; i < 9; ++i) {
        var f = Math.fround(Math.ceil(f32[i]));
        print(f, true);

        var g = Math.ceil(-0 + f32[i]);
        print(g, false);

        print(f, g);
    }
}
test(setupCeil, testCeil);
test(setupCeilDouble, testCeilDouble);
