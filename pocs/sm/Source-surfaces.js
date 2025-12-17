;

print(function () {
    Debugger.Source.prototype.text.call(42)
}, TypeError);
print(function () {
    Debugger.Source.prototype.text.call({})
}, TypeError);
print(function () {
    Debugger.Source.prototype.text.call(Debugger.Source.prototype)
}, TypeError);

print(function () {
    Debugger.Source.prototype.element.call(42)
}, TypeError);
print(function () {
    Debugger.Source.prototype.element.call({})
}, TypeError);
print(function () {
    Debugger.Source.prototype.element.call(Debugger.Source.prototype)
}, TypeError);

print(function () {
    Debugger.Source.prototype.elementAttributeName.call(42)
}, TypeError);
print(function () {
    Debugger.Source.prototype.elementAttributeName.call({})
}, TypeError);
print(function () {
    Debugger.Source.prototype.elementAttributeName.call(Debugger.Source.prototype)
}, TypeError);
