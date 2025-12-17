function foo() {
    var map = new Map();
    map.set();
	print(map.size);
    map.forEach(function () {
        arguments; 
        print(arguments.callee.caller);
    })
}

function Run() {
    foo();
    foo();
    foo();
	foo; 
}




print(Run)
