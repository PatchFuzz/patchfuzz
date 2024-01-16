



function Foo() {
	this.x = 5;
	return 4;
}

eval("

for (var i = 0; i < 100; i++) {
	var x = new Foo();
	assertEq(typeof(x), "object");
}
