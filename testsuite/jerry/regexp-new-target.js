













function F(){}
var obj = Reflect.construct(RegExp, ["baz","g"], F);
assert(RegExp.prototype.exec.call(obj, "foobarbaz")[0] === "baz")
assert(obj.lastIndex === 9)
assert(obj instanceof F);
