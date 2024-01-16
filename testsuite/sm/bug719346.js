

var o = {
	bar: function () { return 1; }
}

function f(o) {
	for (var i = 0; i < 100; i++)
	 o.bar();
}

f(o);


gc();
