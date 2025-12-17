function f(i) {
	var x = new Number(i);
	return x;
}


for (var i = 0; i < 100; i++) {
	var o = f(i);
	print(typeof o, "object");
	print(Number(o), i);
}
