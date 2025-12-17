let depth = 0;
function f1(a2, a3, a4, a5) {
    f2();
}
function f2() {
    
    
    if (depth++ > 40) {
        return;
    }
    f1(1, 2);
    print(JSON.stringify(Array.from(f1.arguments)), "[1,2]");
}
f1(1, 2);
