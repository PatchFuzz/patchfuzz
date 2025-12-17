function foo() {
    var marker = 100;
    let foo = 1; 
}

function bar(){
    let x = 100;
    {
        let y = 100;
        foo();
        print(y);
        print(x);
    }
    print(x);

}

function Run(){
    bar();
    bar();
    bar(); 
	bar; 
    print('PASSED');
}

print(Run);

