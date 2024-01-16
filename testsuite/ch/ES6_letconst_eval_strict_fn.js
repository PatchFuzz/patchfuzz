







function Run(){
    "use strict";
    let a = 1;
    eval('let a = 1; a++;');   
    WScript.Echo(a); 
}


WScript.Attach(Run);