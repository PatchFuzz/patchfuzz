var obj1 = { prop1: 0 };
var index = 0;
Object.defineProperty(obj1, "someProp", { get: function () { }, set: function (x) { } });

var func0 = function () {
    obj1[index--] = 1;
    return obj1.prop1;
}
var func1 = function (obj1) {
    for (var i = 0; i < 65535; i++) {
        obj1.prop1 = func0();
    }
}
print("Pass");