






function Run(){
    var x = 1;
    {
        let x = 2; 
        x; 
    }
    x; 
	WScript.Echo('PASSED');
}

var foo = Run;

WScript.Attach(foo);
WScript.Detach(foo);
WScript.Attach(foo);

