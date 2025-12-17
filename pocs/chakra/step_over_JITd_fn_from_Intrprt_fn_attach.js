var callcount = 0;

function foo() {
    var _foo = "foo";
    callcount++;
    if (callcount == 5)
        bar();
    else
        baz();
        
}

function bar() {
    var _bar = [];
    baz();
    _bar;
}

function baz(){
    var x = 3;
    x++; 
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
print(Run);
