function f(x,y) {
    eval("print(arguments.callee, f)");
}
f(1,2);
