
function foo(prop) {
	this.name = "Foo";
	this.prop = prop;
}


function f(i) {
	var x = new foo(i);
	return x.prop;
}


for (var i = 0; i < 100; i++)
	assertEq(f(i), i);
