






function foo() {
    var marker = 100;
    let foo = 1; 
}

function bar(){
    let x = 100;
    {
        let y = 100;
        foo();
        WScript.Echo(y);
        WScript.Echo(x);
    }
    WScript.Echo(x);

}

function Run(){
    bar();
    bar();
    bar(); 
	bar; 
    WScript.Echo('PASSED');
}

WScript.Attach(Run);

