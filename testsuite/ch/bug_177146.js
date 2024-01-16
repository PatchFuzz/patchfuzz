






function F1(a) {
    F2(a, " World");
}
F1("Hello");

function F2(a,b) {
    arguments.callee.caller.arguments[0] += b;
    b; 
}

WScript.Echo("Pass");
