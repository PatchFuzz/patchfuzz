;

var a = ["A", , "B", "C", "D"];
var normalArrayElementDesc = Object.getOwnPropertyDescriptor(a, 0);
var getterDesc = {
    get: function () { return "F"; },
    set: undefined,
    enumerable: true,
    configurable: false
};
Object.defineProperty(a, 1, getterDesc);



print(() => a.sort(), TypeError);


print(Object.getOwnPropertyDescriptor(a, 1), getterDesc);



for (var i = 0; i < a.length; i++) {
    if (i !== 1 && a.hasOwnProperty(i)) {
        normalArrayElementDesc.value = a[i];
        print(Object.getOwnPropertyDescriptor(a, i), normalArrayElementDesc);
    }
}
