




Object.prototype.length = undefined;
var ary = Array();
ary.prop1 = 1;
Object.defineProperty(ary, "prop2", {
    value: 1,
    enumerable: false
});
for (var prop in ary) {
    if (prop !== "prop1") {
        console.log(`Fail: ${prop} property should not show in for-in`);
    }
}
console.log("pass");
