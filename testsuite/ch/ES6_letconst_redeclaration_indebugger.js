






foo();
foo();


function foo(){
    let b = 200; 
    let a = 100; 
    WScript.Echo('PASSED'); 
}


function Run(){
    foo();
    foo();
    foo();
	foo; 
}

WScript.Attach(Run)

