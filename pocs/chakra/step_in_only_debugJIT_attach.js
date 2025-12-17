var callcount = 0;

function foo() {

    function bar() {
        var d = { y: 2 };
        callcount++;
        with (d) {
            y;
        }
        print(1);
    }
    bar();
    print(2);
}


function Run() {
    foo();
    foo();
    
    foo();
	foo; 
}

print(Run);
print(Run);



