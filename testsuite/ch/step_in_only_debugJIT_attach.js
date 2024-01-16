








var callcount = 0;

function foo() {

    function bar() {
        var d = { y: 2 };
        callcount++;
        with (d) {
            y;
        }
        WScript.Echo(1);
    }
    bar();
    WScript.Echo(2);
}


function Run() {
    foo();
    foo();
    
    foo();
	foo; 
}

WScript.Attach(Run);
WScript.Detach(Run);



