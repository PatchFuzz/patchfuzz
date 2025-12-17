function checkFunction(obj, name, nargs) {
    var desc = Object.getOwnPropertyDescriptor(obj, name);
    print(desc.configurable, true, name + " should be configurable");
    print(desc.writable, true, name + " should be writable");
    print(desc.enumerable, false, name + " should be non-enumerable");
    print(desc.value, obj[name]);  
    print(typeof desc.value, 'function', name + " should be a function");
    print(desc.value.length, nargs, name + " should have .length === " + nargs);
}

checkFunction(this, "Debugger", 1);

print(Debugger.prototype.constructor, Debugger);
print(Object.prototype.toString.call(Debugger.prototype), "[object Debugger]");
print(Object.getPrototypeOf(Debugger.prototype), Object.prototype);
