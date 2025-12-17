function hasOwnProp(o, p) {
    return Object.prototype.hasOwnProperty.call(o, p);
}
function testHasProp() {
    var C = Object.create(null);
    C.protox = 0;
    var B = Object.create(C);
    var objs = [];
    for (var i = 0; i < 50; i++) {
        var A = Object.create(B);
        A["x" + i] = 0;
        A.ownx = 3;
        objs.push(A);
    }
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < objs.length; j++) {
            var obj = objs[j];
            print(hasOwnProp(obj, "protox"), false);
            print("protox" in obj, true);
            print(obj.protox, 0);

            print(hasOwnProp(obj, "ownx"), true);
            print("ownx" in obj, true);
            print(obj.ownx, 3);

            print("missing" in obj, false);
            print(hasOwnProp(obj, "missing"), false);
            print(obj.missing, undefined);
        }
    }
}
testHasProp();

