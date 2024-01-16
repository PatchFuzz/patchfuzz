

function f(i) {
	var x = new Number(i);
	return x;
}


for (var i = 0; i < 100; i++) {
	var o = f(i);
	assertEq(typeof o, "object");
	assertEq(Number(o), i);
}
