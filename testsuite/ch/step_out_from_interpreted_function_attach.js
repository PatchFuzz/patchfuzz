








var callcount = 0;

function foo() {
    var _foo = "foo";
    var _fooargs = arguments;
    bar();
   
}

function bar() {
    var _bar = [];
    var _barargs = arguments;
    callcount++;
    if(callcount == 5 )
        baz();
}


function baz() {   
    var x = 1;
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







