






function foo() {
    let map = new Map();
    map.set();
    bar(map);
    function bar(map) {
        var x = 1; 
    }

    map; 
    WScript.Echo('PASSED');
}

function Run() {
    foo();
    foo()
    foo();
	foo; 
}

WScript.Attach(Run);
WScript.Detach(Run);
WScript.Attach(Run);
