






function foo() {
    let foo = "foo";
    bar();
}

function bar() {
    let z = 1;
    {
        const z = 2; 
    }
    z++; 
}

function Run(){
    foo();
    foo(); 
    foo(); 
	foo; 
    WScript.Echo('PASSED');
}


WScript.Attach(Run);
WScript.Detach(Run);
WScript.Attach(Run);