function foo() {
    let foo = "foo";
    bar();
}

function bar() {
    let z = 1;
    try{
        throw new Error();
    }catch(e){   
        let x = 1; 
        x; 
    }
    z++; 
}

function Run(){
	foo(); 
    foo();
	foo(); 
	foo; 
    print('PASSED');
}

print(Run);