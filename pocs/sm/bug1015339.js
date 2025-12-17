function f(x, y) {
    for (var i=0; i<40; i++) {
	var stack = getBacktrace({args: true, locals: true, thisprops: true});
	print(stack.includes("f(x = "), true);
	backtrace();
    }
}
f(1, 2);
