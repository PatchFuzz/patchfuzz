function f() {
    var x = undefined;
    try {
	[1, 2, 3].map(x);
	print(0, 1);
    } catch(e) {
	print(e.toString().includes("x is not"), true);
    }

    try {
	[1, 2, 3].filter(x, 1, 2);
	print(0, 1);
    } catch(e) {
	print(e.toString().includes("x is not"), true);
    }
}
f();
