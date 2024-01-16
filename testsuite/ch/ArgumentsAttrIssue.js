




function f1(...args) {
    eval("var arguments = 1;");
}
f1();
f1();
f1(); 
print("PASSED");