function test1() {
    var BUGNUMBER = '';
    var summary = '';
    var actual = '';
    test(BUGNUMBER);
    function test() {
	try   {
	    (function () { eval("'foo'.b()", arguments) })();
	}  catch(ex)  {
	    actual = ex + '';
	}
    }
    print(actual, 'TypeError: "foo".b is not a function');
}
test1();

function test2() {
    var BUGNUMBER = '';
    var summary = '';
    function g() {
	'use strict';
	try {
	    eval('function foo() { var a, arguments, b;}');
	} catch (x) {
	    return (x instanceof SyntaxError);
	}
    };
    print(g(), true);
}
test2();
