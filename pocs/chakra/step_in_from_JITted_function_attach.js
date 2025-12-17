foo();
foo();

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
    return function () {
        var x = 1; 
    }
}

function Run() {
    foo();
    foo();
    
    
    foo();
    foo; 
    print('PASSED');
}



print(Run);
print(Run);
print(Run);








