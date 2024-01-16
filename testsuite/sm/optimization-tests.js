












function test(SharedOrUnsharedArrayBuffer) {
var sum = 0;

function f(ia, k) {
    
    
    
    
    Atomics.add(ia, 0, k);

    
    
    Atomics.add(ia, 0, 1);
}

function f2(ia, k) {
    
    
    Atomics.sub(ia, 2, k);

    
    
    Atomics.sub(ia, 2, 1);
}

function f4(ia, k) {
    
    
    
    
    Atomics.or(ia, 6, k);

    
    
    Atomics.or(ia, 6, 1);
}

function g(ia, k) {
    
    
    sum += Atomics.add(ia, 1, k);

    
    
    
    sum += Atomics.add(ia, 1, 1);
}

function g2(ia, k) {
    
    
    
    sum += Atomics.sub(ia, 3, k);

    
    
    
    sum += Atomics.sub(ia, 3, 1);
}

function g4(ia, k) {
    
    
    sum += Atomics.or(ia, 7, k);

    
    
    sum += Atomics.or(ia, 7, 1);
}

var i8a = new Int8Array(new SharedOrUnsharedArrayBuffer(65536));
for ( var i=0 ; i < 10000 ; i++ ) {
    f(i8a, i % 10);
    g(i8a, i % 10);
    f2(i8a, i % 10);
    g2(i8a, i % 10);
    f4(i8a, i % 10);
    g4(i8a, i % 10);
}

assertEq(i8a[0], ((10000 + 10000*4.5) << 24) >> 24);
assertEq(i8a[1], ((10000 + 10000*4.5) << 24) >> 24);
assertEq(i8a[2], ((-10000 + -10000*4.5) << 24) >> 24);
assertEq(i8a[3], ((-10000 + -10000*4.5) << 24) >> 24);
assertEq(i8a[6], 15);
assertEq(i8a[7], 15);
}

test(SharedArrayBuffer);
test(ArrayBuffer);