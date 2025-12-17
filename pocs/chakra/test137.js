function test0() {
    var a = 1;
    while(1 && (0 & 1) >= (0 | a)) {
        function test0a() { a; }
    }
}
test0();
test0();
test0();

print("pass");
