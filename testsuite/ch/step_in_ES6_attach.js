






function foo() {
    var a = "foo";
    let _a = "foo_let";
    const __a = "foo_const";
    bar();
}

function bar() {
    var a = "bar";
    let _a = "bar_let";
    const __a = "bar_const";
    baz(); 
}

function baz() {
    let x = 1;
    x++; 
}

function Run() {
    foo();
    foo();
    
    foo();
    foo; 
    WScript.Echo('PASSED');
}



WScript.Attach(Run); 
WScript.Detach(Run);


