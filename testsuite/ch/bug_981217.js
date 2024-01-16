




function b() { return eval("super.base()") }
try {b()} catch(e) { WScript.Echo(e) } 

