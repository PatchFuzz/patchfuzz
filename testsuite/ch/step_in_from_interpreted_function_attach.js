






function foo() {
    var a = "foo";
    var b = new Array();
    var c = arguments;
    bar(); 
}

function bar() {
    var a = "bar";
    var b = [];
    var c = new Date();   
}

function Run() {
    bar();
    bar();
    
    
    
    foo();
    foo; 
    WScript.Echo('PASSED');
}

bar();
bar();

WScript.Attach(Run);
