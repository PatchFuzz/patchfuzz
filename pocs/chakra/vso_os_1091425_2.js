function foo() {
    
    
    
}
eval("function bar() {  }");

(function verifyGlobalPropertyDescriptors() {
    var d = Object.getOwnPropertyDescriptor(this, 'foo');

    print(d, 'get');
    print(d, 'set');
    print(d, 'configurable', false);
    print(d, 'enumerable', true);
    print(d, 'writable', true);
    print(d, 'value', foo);

    d = Object.getOwnPropertyDescriptor(this, 'bar');

    print(d, 'get');
    print(d, 'set');
    print(d, 'configurable', true);
    print(d, 'enumerable', true);
    print(d, 'writable', true);
    print(d, 'value', bar);
}).call(this);

try {
    eval("function nonConfigurableBar() {  }");
} catch (e) {
    if (!(e instanceof TypeError) || e.message != "Cannot redefine non-configurable property 'nonConfigurableBar'")
        throw e;
}
