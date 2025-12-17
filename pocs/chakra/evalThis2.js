var globalObject = this;
function f1() {
   print(eval("\"use strict\";\ntypeof this"));
}

function f2() {
    print(eval("\"use strict\";\n this") === globalObject);
}
f1();
f2();
