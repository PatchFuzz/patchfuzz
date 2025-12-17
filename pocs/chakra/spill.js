function test0() {
    var obj0 = {};
    var func1 = function (argFunc1, argMath2) {
        for (var __loopvar4 = 0; __loopvar4 < 3;) {
            __loopvar4++;
            argMath2 ^= 1;
            obj0.prop1 = (this.prop1++);
            __loopvar4 = (this.prop1++);
        }
    }
    func1(1, true, func1(1, 1, 1));
    func1.call(obj0);

};


test0();
test0();
test0();
test0();

print('pass');