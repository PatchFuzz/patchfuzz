function testSlowNativeBail() {
    var a = ['0', '1', '2', '3', '+'];
    try {
	for (var i = 0; i < a.length; i++)
	    new RegExp(a[i]);
	print(true, false);
    } catch (exc) {
        print(exc instanceof SyntaxError, true);
    }
}
testSlowNativeBail();
