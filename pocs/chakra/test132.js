function test0() {
    var obj1 = {};
    var VarArr0 = Array(obj1, -2, 210);
    function v4(v5, v6) {
        v5[2] = 1.1;
        v6[1];
    }
    var v9 = VarArr0;
    var v8 = VarArr0;
    v4(v8, v9);
}
test0();
test0();

print("pass");
