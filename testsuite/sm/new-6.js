



function Foo() {
	var y = 0;
	for (var i = 0; i < 100; i++)
		{ y++ }
	this.x = 5;
	return y;
}

eval("

for (var i = 0; i < 100; i++) {
	var x = new Foo();
	assertEq(typeof(x), "object");
}
