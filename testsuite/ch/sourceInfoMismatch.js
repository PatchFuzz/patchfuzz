








var foo = (function x() { return x; }  )();

WScript.Attach(foo);
WScript.Echo("pass");