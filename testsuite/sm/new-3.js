

function Foo(prop) {
	this.name = "Foo";
	this.prop = prop;
}

function f() {
	
	for (var i = 0; i < 100; i++) 
	{ }

	
	var x = new Foo("cats");
	return x;
}

assertEq(f().prop, "cats");
