




 var x = {};

 WScript.Echo("x.valueOf()");
 try {
    x.valueOf();  
 }
 catch (e)
 {
    WScript.Echo(e);
 }

WScript.Echo("x.valueOf.call(undefined)");
 try {
    x.valueOf.call(undefined);  
 }
 catch (e)
 {
    WScript.Echo(e);
 }

WScript.Echo("x.valueOf.call(null)");
 try {
    x.valueOf.call(null);  
 }
 catch (e)
 {
    WScript.Echo(e);
 }

WScript.Echo("x.valueOf.call()");
 try {
    x.valueOf.call();  
 }
 catch (e)
 {
    WScript.Echo(e);
 }

WScript.Echo("typeof x.valueOf.call(true)");
 WScript.Echo(typeof x.valueOf.call(true));  

WScript.Echo("typeof x.valueOf.call(42)");
 WScript.Echo(typeof x.valueOf.call(42));  

WScript.Echo("typeof x.valueOf.call('Hello')");
 WScript.Echo(typeof x.valueOf.call('Hello'));  
