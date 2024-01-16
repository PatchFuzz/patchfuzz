

var Class = {
	create : function() {
		return function() {
			this.initialize.apply(this, arguments);
		}
	}
}

var Bar = Class.create();
Bar.prototype = {
	
	initialize : function() { }
}

var Foo = Class.create();
Foo.prototype = {
	
	initialize : function() {
		this.bar = new Bar();
	}
}


function f() {
	for (var i = 0; i < 100; i++) {
		var foo = new Foo();
	}
}

f();
