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
    print('PASSED');
}

foo();
foo();

print(Run);







