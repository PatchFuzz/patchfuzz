







function foo(){
    const a = 1;
    a; 
    WScript.Echo('PASSED');
}

function Run(){
    foo();
    foo();
    foo();
	foo; 
}

WScript.Attach(Run);
