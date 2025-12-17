try {
    (function() {
	let a = 3;
	let XY = XY;
	return function() { return a; };
    })();
    print(0, 1);
} catch(e) {
    print(e instanceof ReferenceError, true);
    print(e.message.includes("XY"), true);
}
