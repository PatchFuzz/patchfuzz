








function foo() {
    let x = 1;
    bar();
}

function bar() {
    let x = 2; 
    baz();

    
    x;
}

function baz() {
    let x = 3;
    x++; 
    x;
}

function Run() {
    foo();
    foo();
    
    foo(); 
    foo; 
    WScript.Echo('PASSED');
}

foo();
foo();

WScript.Attach(Run);
