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
    print('PASSED');
}

bar();
bar();

print(Run);
