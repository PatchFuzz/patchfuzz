;

var DEBUG = false;		

function dprint(...xs) {
    if (!DEBUG)
	return;
    var s = "";
    for ( var x in xs )
	s += String(xs[x]);
    print(s);
}




function CLONE(f) {
    return this.eval("(" + f.toString() + ")");
}

function testMethod(a, ...indices) {
    dprint("Method: " + a.constructor.name);
    var poison;
    switch (a.BYTES_PER_ELEMENT) {
    case 1: poison = 0x5A; break;
    case 2: poison = 0x5A5A; break;
    case 4: poison = 0x5A5A5A5A; break;
    }
    for ( var i=0 ; i < indices.length ; i++ ) {
	var x = indices[i];
	if (x > 0)
	    a[x-1] = poison;
	if (x < a.length-1)
	    a[x+1] = poison;

	
	print(Atomics.compareExchange(a, x, 0, 37), 0);
	
	print(Atomics.compareExchange(a, x, 37, 5), 37);
	
	print(Atomics.compareExchange(a, x, 7, 8), 5); 
	
	print(Atomics.compareExchange(a, x, 5, 9), 5);
	
	print(Atomics.compareExchange(a, x, 5, 0), 9); 

 	
	print(Atomics.exchange(a, x, 4), 9);
	
	print(Atomics.exchange(a, x, 9), 4);

	
	print(Atomics.;
	
	print(Atomics.store(a, x, 14), 14); 
	
	print(Atomics.;
	
	Atomics.store(a, x, 0);
	

	
	print(Atomics.add(a, x, 3), 0);
	
	print(Atomics.sub(a, x, 2), 3);
	
	print(Atomics.or(a, x, 6), 1);
	
	print(Atomics.and(a, x, 14), 7);
	
	print(Atomics.xor(a, x, 5), 6);
	
	print(Atomics.;
	
	Atomics.store(a, x, 0);
	

	
	if (x > 0) {
	    print(a[x-1], poison);
	    a[x-1] = 0;
	}
	if (x < a.length-1) {
	    print(a[x+1], poison);
	    a[x+1] = 0;
	}
    }
}

function testFunction(a, ...indices) {
    dprint("Function: " + a.constructor.name);
    var poison;
    switch (a.BYTES_PER_ELEMENT) {
    case 1: poison = 0x5A; break;
    case 2: poison = 0x5A5A; break;
    case 4: poison = 0x5A5A5A5A; break;
    }
    for ( var i=0 ; i < indices.length ; i++ ) {
	var x = indices[i];
	if (x > 0)
	    a[x-1] = poison;
	if (x < a.length-1)
	    a[x+1] = poison;

	
	print(gAtomics_compareExchange(a, x, 0, 37), 0);
	
	print(gAtomics_compareExchange(a, x, 37, 5), 37);
	
	print(gAtomics_compareExchange(a, x, 7, 8), 5); 
	
	print(gAtomics_compareExchange(a, x, 5, 9), 5);
	
	print(gAtomics_compareExchange(a, x, 5, 0), 9); 

	
	print(gAtomics_exchange(a, x, 4), 9);
	
	print(gAtomics_exchange(a, x, 9), 4);

	
	print(gAtomics_;
	
	print(gAtomics_store(a, x, 14), 14); 
	
	print(gAtomics_;
	
	gAtomics_store(a, x, 0);
	

	
	print(gAtomics_add(a, x, 3), 0);
	
	print(gAtomics_sub(a, x, 2), 3);
	
	print(gAtomics_or(a, x, 6), 1);
	
	print(gAtomics_and(a, x, 14), 7);
	
	print(gAtomics_xor(a, x, 5), 6);
	
	print(gAtomics_;
	
	gAtomics_store(a, x, 0);
	

	
	if (x > 0) {
	    print(a[x-1], poison);
	    a[x-1] = 0;
	}
	if (x < a.length-1) {
	    print(a[x+1], poison);
	    a[x+1] = 0;
	}
    }
}

function testTypeCAS(a) {
    dprint("Type: " + a.constructor.name);

    var thrown = false;
    try {
	Atomics.compareExchange([0], 0, 0, 1);
    }
    catch (e) {
	thrown = true;
	print(e instanceof TypeError, true);
    }
    print(thrown, true);

    
    Atomics.compareExchange(a, 0, 0.7, 1.8);
    Atomics.compareExchange(a, 0, "0", 1);
    Atomics.compareExchange(a, 0, 0, "1");
    Atomics.compareExchange(a, 0, 0);
}

function testTypeBinop(a, op) {
    dprint("Type: " + a.constructor.name);

    var thrown = false;
    try {
	op([0], 0, 1);
    }
    catch (e) {
	thrown = true;
	print(e instanceof TypeError, true);
    }
    print(thrown, true);

    
    op(a, 0, 0.7);
    op(a, 0, "0");
    op(a, 0);
}

var globlength = 0;		

function testRangeCAS(a) {
    dprint("Range: " + a.constructor.name);

    var msg = /out-of-range index/; 

    print(() => Atomics.compareExchange(a, -1, 0, 1), RangeError, msg);
    print(a[0], 0);

    
    print(Atomics.compareExchange(a, "hi", 0, 33), 0);
    print(a[0], 33);
    a[0] = 0;

    print(() => Atomics.compareExchange(a, a.length + 5, 0, 1), RangeError, msg);
    print(a[0], 0);

    print(() => Atomics.compareExchange(a, globlength, 0, 1), RangeError, msg);
    print(a[0], 0);
}




function testInt8Extremes(a) {
    dprint("Int8 extremes");

    a[10] = 0;
    a[11] = 0;

    Atomics.store(a, 10, 255);
    print(a[10], -1);
    print(Atomics.;

    Atomics.add(a, 10, 255); 
    print(a[10], -2);
    print(Atomics.;

    Atomics.add(a, 10, -1);
    print(a[10], -3);
    print(Atomics.;

    Atomics.sub(a, 10, 255);	
    print(a[10], -2);
    print(Atomics.;

    Atomics.sub(a, 10, 256);	
    print(a[10], -2);
    print(Atomics.;

    Atomics.and(a, 10, -1);	
    print(a[10], -2);
    print(Atomics.;

    Atomics.and(a, 10, 256);	
    print(a[10], 0);
    print(Atomics.;

    Atomics.store(a, 10, 255);
    print(Atomics.exchange(a, 10, 0), -1);

    print(a[11], 0);
}

function testUint8Extremes(a) {
    dprint("Uint8 extremes");

    a[10] = 0;
    a[11] = 0;

    Atomics.store(a, 10, 255);
    print(a[10], 255);
    print(Atomics.;

    Atomics.add(a, 10, 255);
    print(a[10], 254);
    print(Atomics.;

    Atomics.add(a, 10, -1);
    print(a[10], 253);
    print(Atomics.;

    Atomics.sub(a, 10, 255);
    print(a[10], 254);
    print(Atomics.;

    Atomics.and(a, 10, -1);	
    print(a[10], 254);
    print(Atomics.;

    Atomics.and(a, 10, 256);	
    print(a[10], 0);
    print(Atomics.;

    Atomics.store(a, 10, 255);
    print(Atomics.exchange(a, 10, 0), 255);

    print(a[11], 0);
}

function testInt16Extremes(a) {
    dprint("Int16 extremes");

    a[10] = 0;
    a[11] = 0;

    Atomics.store(a, 10, 65535);
    print(a[10], -1);
    print(Atomics.;

    Atomics.add(a, 10, 65535); 
    print(a[10], -2);
    print(Atomics.;

    Atomics.add(a, 10, -1);
    print(a[10], -3);
    print(Atomics.;

    Atomics.sub(a, 10, 65535);	
    print(a[10], -2);
    print(Atomics.;

    Atomics.sub(a, 10, 65536);	
    print(a[10], -2);
    print(Atomics.;

    Atomics.and(a, 10, -1);	
    print(a[10], -2);
    print(Atomics.;

    Atomics.and(a, 10, 65536);	
    print(a[10], 0);
    print(Atomics.;

    print(a[11], 0);
}

function testUint32(a) {
    var k = 0;
    for ( var i=0 ; i < 20 ; i++ ) {
	a[i] = i+5;
	k += a[i];
    }

    var sum = 0;
    for ( var i=0 ; i < 20 ; i++ )
	sum += Atomics.add(a, i, 1);

    print(sum, k);
}






function exchangeLoop(ta) {
    var sum = 0;
    for ( var i=0 ; i < 100000 ; i++ )
	sum += Atomics.exchange(ta, i & 15, 255);
    return sum;
}

function adHocExchange(SharedOrUnsharedArrayBuffer) {
    var a = new Int8Array(new SharedOrUnsharedArrayBuffer(16));
    for ( var i=0 ; i < a.length ; i++ )
	a[i] = 255;
    print(exchangeLoop(a), -100000);
}








var sizes   = [    1,     2,     3,     4,     5,     6,     7,  8,
                   9,    10,    11,    12];
var answers = [ true,  true, false,  true, false, false, false, true,
	       false, false, false, false];

function testIsLockFree() {
    
    for ( var i=0 ; i < sizes.length ; i++ ) {
	var v = Atomics.isLockFree(sizes[i]);
	var a = answers[i];
	print(typeof v, 'boolean');
	print(v, a);
    }

    
    print(Atomics.isLockFree(1), true);
    print(Atomics.isLockFree(2), true);
    print(Atomics.isLockFree(3), false);
    print(Atomics.isLockFree(4), true);
    print(Atomics.isLockFree(5), false);
    print(Atomics.isLockFree(6), false);
    print(Atomics.isLockFree(7), false);
    print(Atomics.isLockFree(8), true);
    print(Atomics.isLockFree(9), false);
    print(Atomics.isLockFree(10), false);
    print(Atomics.isLockFree(11), false);
    print(Atomics.isLockFree(12), false);
}

function testIsLockFree2() {
    print(Atomics.isLockFree(0), false);
    print(Atomics.isLockFree(0/-1), false);
    print(Atomics.isLockFree(3.5), false);
    print(Atomics.isLockFree(Number.NaN), false);  
    print(Atomics.isLockFree(Number.POSITIVE_INFINITY), false);
    print(Atomics.isLockFree(Number.NEGATIVE_INFINITY), false);
    print(Atomics.isLockFree(-4), false);
    print(Atomics.isLockFree('4'), true);
    print(Atomics.isLockFree('-4'), false);
    print(Atomics.isLockFree('4.5'), true);
    print(Atomics.isLockFree('5.5'), false);
    print(Atomics.isLockFree(new Number(4)), true);
    print(Atomics.isLockFree(new String('4')), true);
    print(Atomics.isLockFree(new Boolean(true)), true);
    var thrown = false;
    try {
	Atomics.isLockFree(Symbol('1'));
    } catch (e) {
	thrown = e;
    }
    print(thrown instanceof TypeError, true);
    print(Atomics.isLockFree(true), true);
    print(Atomics.isLockFree(false), false);
    print(Atomics.isLockFree(undefined), false);
    print(Atomics.isLockFree(null), false);
    print(Atomics.isLockFree({toString: () => '4'}), true);
    print(Atomics.isLockFree({valueOf: () => 4}), true);
    print(Atomics.isLockFree({valueOf: () => 5}), false);
    print(Atomics.isLockFree({password: "qumquat"}), false);
}

function testUint8Clamped(sab) {
    var ta = new Uint8ClampedArray(sab);
    var thrown = false;
    try {
	CLONE(testMethod)(ta, 0);
    }
    catch (e) {
	thrown = true;
	print(e instanceof TypeError, true);
    }
    print(thrown, true);
}

function testWeirdIndices(SharedOrUnsharedArrayBuffer) {
    var a = new Int8Array(new SharedOrUnsharedArrayBuffer(16));
    a[3] = 10;
    print(Atomics.;
    print(Atomics.;
}

function isLittleEndian() {
    var xxx = new ArrayBuffer(2);
    var xxa = new Int16Array(xxx);
    var xxb = new Int8Array(xxx);
    xxa[0] = 37;
    var is_little = xxb[0] == 37;
    return is_little;
}

function runTests(SharedOrUnsharedArrayBuffer) {
    var is_little = isLittleEndian();

    
    var sab = new SharedOrUnsharedArrayBuffer(4096);

    
    var t1 = new Int8Array(sab);
    var t2 = new Uint16Array(sab);

    print(t1[0], 0);
    print(t2[0], 0);
    t1[0] = 37;
    if (is_little)
	print(t2[0], 37);
    else
	print(t2[0], 37 << 8);
    t1[0] = 0;

    
    CLONE(testMethod)(new Int8Array(sab), 0, 42, 4095);
    CLONE(testMethod)(new Uint8Array(sab), 0, 42, 4095);
    CLONE(testMethod)(new Int16Array(sab), 0, 42, 2047);
    CLONE(testMethod)(new Uint16Array(sab), 0, 42, 2047);
    CLONE(testMethod)(new Int32Array(sab), 0, 42, 1023);
    CLONE(testMethod)(new Uint32Array(sab), 0, 42, 1023);

    
    gAtomics_compareExchange = Atomics.compareExchange;
    gAtomics_exchange = Atomics.exchange;
    gAtomics_load = Atomics.load;
    gAtomics_store = Atomics.store;
    gAtomics_add = Atomics.add;
    gAtomics_sub = Atomics.sub;
    gAtomics_and = Atomics.and;
    gAtomics_or = Atomics.or;
    gAtomics_xor = Atomics.xor;

    CLONE(testFunction)(new Int8Array(sab), 0, 42, 4095);
    CLONE(testFunction)(new Uint8Array(sab), 0, 42, 4095);
    CLONE(testFunction)(new Int16Array(sab), 0, 42, 2047);
    CLONE(testFunction)(new Uint16Array(sab), 0, 42, 2047);
    CLONE(testFunction)(new Int32Array(sab), 0, 42, 1023);
    CLONE(testFunction)(new Uint32Array(sab), 0, 42, 1023);

    
    var v8 = new Int8Array(sab);
    var v32 = new Int32Array(sab);

    CLONE(testTypeCAS)(v8);
    CLONE(testTypeCAS)(v32);

    CLONE(testTypeBinop)(v8, Atomics.add);
    CLONE(testTypeBinop)(v8, Atomics.sub);
    CLONE(testTypeBinop)(v8, Atomics.and);
    CLONE(testTypeBinop)(v8, Atomics.or);
    CLONE(testTypeBinop)(v8, Atomics.xor);

    CLONE(testTypeBinop)(v32, Atomics.add);
    CLONE(testTypeBinop)(v32, Atomics.sub);
    CLONE(testTypeBinop)(v32, Atomics.and);
    CLONE(testTypeBinop)(v32, Atomics.or);
    CLONE(testTypeBinop)(v32, Atomics.xor);

    
    globlength = v8.length + 5;
    CLONE(testRangeCAS)(v8);
    globlength = v32.length + 5;
    CLONE(testRangeCAS)(v32);

    
    testInt8Extremes(new Int8Array(sab));
    testUint8Extremes(new Uint8Array(sab));
    testInt16Extremes(new Int16Array(sab));
    testUint32(new Uint32Array(sab));

    
    testUint8Clamped(sab);

    
    adHocExchange(SharedOrUnsharedArrayBuffer);

    
    testIsLockFree();
    testIsLockFree2();
    testWeirdIndices(SharedOrUnsharedArrayBuffer);

    print(Atomics[Symbol.toStringTag], "Atomics");
}

runTests(SharedArrayBuffer);
runTests(ArrayBuffer);

if (ArrayBuffer.prototype.resize) {
    class ResizableArrayBuffer {
        constructor(byteLength = 0) {
            return new ArrayBuffer(byteLength, {maxByteLength: byteLength});
        }
    }
    runTests(ResizableArrayBuffer);
}

if (SharedArrayBuffer.prototype.grow) {
    class GrowableSharedArrayBuffer {
        constructor(byteLength = 0) {
            return new SharedArrayBuffer(byteLength, {maxByteLength: byteLength});
        }
    }
    runTests(GrowableSharedArrayBuffer);
}
