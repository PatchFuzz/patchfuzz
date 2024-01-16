




var globalObject = this;
function f1() {
   WScript.Echo(eval("\"use strict\";\ntypeof this"));
}

function f2() {
    WScript.Echo(eval("\"use strict\";\n this") === globalObject);
}
f1();
f2();
