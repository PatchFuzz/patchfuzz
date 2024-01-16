var seen = -1;




function setter(x) {
    this.val = x;
    x = 255;
    bailout();
    seen++;
    assertEq(seen, this.val);
    return 5;
}

function F(){}
Object.defineProperty(F.prototype, "value" , ({set: setter}));

function test() {
    var obj = new F();
    var itrCount = 10000;
    for(var i = 0; i < itrCount; i++) {
        assertEq(obj.value = i, i);
        assertEq(obj.val, i);
    }
}
test();
