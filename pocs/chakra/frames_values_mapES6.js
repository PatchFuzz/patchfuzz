function foo() {
    let map = new Map();
    map.set();
    bar(map);
    function bar(map) {
        var x = 1; 
    }

    map; 
    print('PASSED');
}

function Run() {
    foo();
    foo()
    foo();
	foo; 
}

print(Run);
print(Run);
print(Run);
