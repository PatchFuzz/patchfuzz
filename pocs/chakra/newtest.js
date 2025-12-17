var results = 0;
var test = 0;
const verbose = WScript.Arguments[0] != "summary";

function check(actual, expected) {
    if (actual != expected)
        throw new Error("Generator produced " + actual + " instead of " + expected);
    if (verbose)
        print('Result ' + ++results +  ' Generator correctly produced ' + actual);
}

function title (name) {
    if (verbose) {
        print("Beginning Test " + ++test + ": " + name);
        results = 0;
    }
}



title("Construction after self-reference in loop control");

function testOne()
{
	function* foo(a1,a2) {
	
		for (let i = a1; i < foo; i = i + a2)
        {
		    yield 0;
		}

		function bar() {}
		var b = new bar();
	}

    foo().next()
    return true;
}


for (var i = 0; i < 30 ;++i){
    testOne();
}

print('pass')
