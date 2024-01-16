var count = 0;



function test1() {
    try {
	return [1, 2, 3];
    } finally {
	for (var i=0; i<20; i++) { count++; }
    }
}
assertEq(test1().toString(), "1,2,3");
assertEq(count, 20);


function test2() {
    try {
	throw 3;
    } finally {
	for (var i=0; i<20; i++) { count++; }
    }
}
try {
    test2();
    assertEq(0, 1);
} catch(e) {
    assertEq(e, 3);
}
assertEq(count, 40);
