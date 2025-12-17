const global = newGlobal({ newCompartment: true });


global.eval("\nclass MyClass {\n #privateProperty1\n }\nobj = new MyClass();");


const debug = Debugger();
const globalDebugObject = debug.addDebuggee(global);


var otherGlobalObj = globalDebugObject.getOwnPropertyDescriptor("obj").value
var privateSymbol = otherGlobalObj.getOwnPrivateProperties()[0]


var p = new Proxy({}, {});





fail = false;
try {
    p[privateSymbol] = 1;
    fail = true;
} catch (e) {
    print(e instanceof TypeError, true);
}
print(fail, false);

try {
    p[privateSymbol];
    fail = true;
} catch (e) {
    print(e instanceof TypeError, true);
}
print(fail, false);
