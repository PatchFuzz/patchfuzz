if (getJitCompilerOptions()["ion.warmup.trigger"] <= 100)
    setJitCompilerOption("ion.warmup.trigger", 100);




if (getJitCompilerOptions()["ion.forceinlineCaches"])
    setJitCompilerOption("ion.forceinlineCaches", 0);


gczeal(0);



var resumeHere = function (i) { if (i >= 99) bailout(); };




var uceFault = function (i) {
    if (i > 98)
        uceFault = function (i) { return true; };
    return false;
};



var global_arr;
function escape(arr) { global_arr = arr; }


function array0Length(i) {
    var a = [];
    print(a, true);
    return a.length;
}

function array0LengthBail(i) {
    var a = [];
    resumeHere(i);
    print(a, true);
    return a.length;
}

function array1Length(i) {
    var a = [ i ];
    print(a, true);
    return a.length;
}

function array1LengthBail(i) {
    var a = [ i ];
    resumeHere(i);
    print(a, true);
    return a.length;
}

function array2Length(i) {
    var a = [ i, i ];
    print(a, true);
    return a.length;
}

function array2LengthBail(i) {
    var a = [ i, i ];
    resumeHere(i);
    print(a, true);
    return a.length;
}



function arrayWithGCInit0(i) {
    var a = [ (i == 99 ? (gc(), i) : i), i ];
    print(a, true);
    return a.length;
}

function arrayWithGCInit1(i) {
    var a = [ i, (i == 99 ? (gc(), i) : i) ];
    print(a, true);
    return a.length;
}

function arrayWithGCInit2(i) {
    var a = [ i, i ];
    if (i == 99) gc();
    print(a, true);
    return a.length;
}


function array1Content(i) {
    var a = [ i ];
    print(a[0], i);
    print(a, true);
    return a.length;
}
function array1ContentBail0(i) {
    var a = [ i ];
    resumeHere(i);
    print(a[0], i);
    print(a, true);
    return a.length;
}
function array1ContentBail1(i) {
    var a = [ i ];
    print(a[0], i);
    resumeHere(i);
    print(a, true);
    return a.length;
}

function array2Content(i) {
    var a = [ i, i ];
    print(a[0], i);
    print(a[1], i);
    print(a, true);
    return a.length;
}

function array2ContentBail0(i) {
    var a = [ i, i ];
    resumeHere(i);
    print(a[0], i);
    print(a[1], i);
    print(a, true);
    return a.length;
}

function array2ContentBail1(i) {
    var a = [ i, i ];
    print(a[0], i);
    resumeHere(i);
    print(a[1], i);
    print(a, true);
    return a.length;
}

function array2ContentBail2(i) {
    var a = [ i, i ];
    print(a[0], i);
    print(a[1], i);
    resumeHere(i);
    print(a, true);
    return a.length;
}


function arrayInitBail0(i) {
    var a = [ resumeHere(i), i ];
    print(a, true);
    return a.length;
}

function arrayInitBail1(i) {
    var a = [ i, resumeHere(i) ];
    print(a, true);
    return a.length;
}


function arrayLarge0(i) {
    var a = new Array(10000000);
    resumeHere(); bailout(); 
    
    print(a, false);
    return a.length;
}

function arrayLarge1(i) {
    var a = new Array(10000000);
    a[0] = i;
    print(a[0], i);
    
    print(a, false);
    return a.length;
}

function arrayLarge2(i) {
    var a = new Array(10000000);
    a[0] = i;
    a[100] = i;
    print(a[0], i);
    print(a[100], i);
    
    print(a, false);
    return a.length;
}


function arrayCond(i) {
    var a = [i,0,i];
    if (i % 2 == 1)
        a[1] = i;
    print(a[0], i);
    print(a[1], (i % 2) * i);
    print(a[2], i);
    print(a, true);
    return a.length;
}


function arrayHole0(i) {
    var a = [i,,i];
    if (i != 99)
        a[1] = i;
    print(a[0], i);
    print(a[1], i != 99 ? i : undefined);
    print(a[2], i);
    
    print(a, false);
    return a.length;
}



function arrayHole1(i) {
    var a = [i,,i];
    if (i != 99)
        a[1] = i;
    print(a[0], i);
    print(a[1], i != 99 ? i : 100);
    print(a[2], i);
    
    print(a, false);
    return a.length;
}


var uceFault_arrayAlloc0 = eval(`(${uceFault})`.replace('uceFault', 'uceFault_arrayAlloc0'));
function arrayAlloc0(i) {
    var a = new Array(10);
    if (uceFault_arrayAlloc0(i) || uceFault_arrayAlloc0(i)) {
        return a.length;
    }
    print(a, true);
    return 0;
}

var uceFault_arrayAlloc1 = eval(`(${uceFault})`.replace('uceFault', 'uceFault_arrayAlloc1'));
function arrayAlloc1(i) {
    var a = new Array(10);
    if (uceFault_arrayAlloc1(i) || uceFault_arrayAlloc1(i)) {
        a[0] = i;
        a[1] = i;
        print(a[0], i);
        print(a[1], i);
        print(a[2], undefined);
        return a.length;
    }
    print(a, true);
    return 0;
}

var uceFault_arrayAlloc2 = eval(`(${uceFault})`.replace('uceFault', 'uceFault_arrayAlloc2'));
function arrayAlloc2(i) {
    var a = new Array(10);
    if (uceFault_arrayAlloc2(i) || uceFault_arrayAlloc2(i)) {
        a[4096] = i;
        print(a[0], undefined);
        print(a[4096], i);
        return a.length;
    }
    print(a, true);
    return 0;
}

function build(l) { var arr = []; for (var i = 0; i < l; i++) arr.push(i); return arr }
var uceFault_arrayAlloc3 = eval(`(${uceFault})`.replace('uceFault', 'uceFault_arrayAlloc3'));
function arrayAlloc3(i) {
    var a = [0,1,2,3,4,5,6,7,8];
    if (uceFault_arrayAlloc3(i) || uceFault_arrayAlloc3(i)) {
        print(a[0], 0);
        print(a[3], 3);
        return a.length;
    }
    print(a, true);
    return 0;
};


eval(`(${resumeHere})`);

for (var i = 0; i < 100; i++) {
    array0Length(i);
    array0LengthBail(i);
    array1Length(i);
    array1LengthBail(i);
    array2Length(i);
    array2LengthBail(i);
    array1Content(i);
    array1ContentBail0(i);
    array1ContentBail1(i);
    array2Content(i);
    array2ContentBail0(i);
    array2ContentBail1(i);
    array2ContentBail2(i);
    arrayInitBail0(i);
    arrayInitBail1(i);
    arrayLarge0(i);
    arrayLarge1(i);
    arrayLarge2(i);
    
    arrayHole0(i);
    arrayAlloc0(i);
    arrayAlloc1(i);
    arrayAlloc2(i);
    arrayAlloc3(i);
}

for (var i = 0; i < 100; i++) {
    arrayWithGCInit0(i);
    arrayWithGCInit1(i);
    arrayWithGCInit2(i);
}



Object.defineProperty(Array.prototype, 1, {
  value: 100,
  configurable: true,
  enumerable: true,
  writable: true
});

for (var i = 0; i < 100; i++) {
    arrayHole1(i);
}
