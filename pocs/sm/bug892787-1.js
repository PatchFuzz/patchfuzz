[0].some(Function.prototype)
function f() {
    new Function.prototype
}
function g() {
    var count = 0;
    for (var i=0; i<3; i++) {
	try {
            f();
	} catch (e) {
	    print(e.message.includes("is not a constructor"), true);
	    count++;
	}
    }
    print(count, 3);
}
g();
