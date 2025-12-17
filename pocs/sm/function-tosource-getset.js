var o = {get prop() { a + b; }, set prop(x) { a + b; }};
var prop = Object.getOwnPropertyDescriptor(o, "prop");
print(prop.get.toString(), "get prop() { a + b; }");
if (Function.prototype.toSource) {
    print(prop.get.toSource(), "get prop() { a + b; }");
}
print(prop.set.toString(), "set prop(x) { a + b; }");
if (Function.prototype.toSource) {
    print(prop.set.toSource(), "set prop(x) { a + b; }");
}
if (Object.prototype.toSource) {
    print(o.toSource(), "({get prop() { a + b; }, set prop(x) { a + b; }})");
}
