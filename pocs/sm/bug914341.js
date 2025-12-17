function f() {
    print(typeof eval("this"), "object");
}
for (var i=0; i<5; i++)
    f();
