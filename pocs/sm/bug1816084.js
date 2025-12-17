var count = 0;
function f() {
    if (count++ < 10) {
        interruptIf(true);
    }
    print((1).toLocaleString(), "1");
    return true;
}
setInterruptCallback(f);
f();
