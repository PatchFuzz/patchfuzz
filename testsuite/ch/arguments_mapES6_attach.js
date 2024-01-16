







function foo() {
    var map = new Map();
    map.set();
	WScript.Echo(map.size);
    map.forEach(function () {
        arguments; 
        WScript.Echo(arguments.callee.caller);
    })
}

function Run() {
    foo();
    foo();
    foo();
	foo; 
}




WScript.Attach(Run)
