







function Run() {
    var a = "foo"; 
    var b = new Array();
    var c = arguments;
    bar();   
}

function bar() {
    var a = "bar";
    var b = [];
    var c = new Date();
    c;  
}


WScript.Attach(Run);
WScript.Detach(Run);
WScript.Attach(Run);

WScript.Echo('PASSED');



