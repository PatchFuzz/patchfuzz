


NaN.__proto__;
function f0() {
    try {} catch(e) {}
}
for (i = 0; i < 9; i++) {
    new f0;
    f0();
    gc()
}
