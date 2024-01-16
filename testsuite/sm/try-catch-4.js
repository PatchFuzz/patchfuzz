

function f() {
    var res = 0;
    try {
	throw 1;
    } catch(e) {
	for (var i=0; i<10; i++) {
	    res += 3;
	}
    }

    assertEq(res, 30);
}
f();
