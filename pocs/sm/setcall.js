;

var calls = 0;
function g() {
    calls++;
};
function test1() {
    for (var i=0; i<20; i++) {
	if (i > 18)
	    g() = 2;
    }
}
print(test1, ReferenceError);
print(calls, 1);

function test2() {
    for (var i=0; i<20; i++) {
	if (i > 18)
	    g()++;
    }
}
print(test2, ReferenceError);
print(calls, 2);

function test3() {
    for (var i=0; i<20; i++) {
	if (i > 18)
	    g() >>= 2;
    }
}
print(test3, ReferenceError);
print(calls, 3);
