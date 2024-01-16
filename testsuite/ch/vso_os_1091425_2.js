




function foo() {
    
    
    
}
eval("function bar() {  }");

(function verifyGlobalPropertyDescriptors() {
    var d = Object.getOwnPropertyDescriptor(this, 'foo');

    assertPropertyDoesNotExist(d, 'get');
    assertPropertyDoesNotExist(d, 'set');
    assertPropertyExists(d, 'configurable', false);
    assertPropertyExists(d, 'enumerable', true);
    assertPropertyExists(d, 'writable', true);
    assertPropertyExists(d, 'value', foo);

    d = Object.getOwnPropertyDescriptor(this, 'bar');

    assertPropertyDoesNotExist(d, 'get');
    assertPropertyDoesNotExist(d, 'set');
    assertPropertyExists(d, 'configurable', true);
    assertPropertyExists(d, 'enumerable', true);
    assertPropertyExists(d, 'writable', true);
    assertPropertyExists(d, 'value', bar);
}).call(this);

try {
    eval("function nonConfigurableBar() {  }");
} catch (e) {
    if (!(e instanceof TypeError) || e.message != "Cannot redefine non-configurable property 'nonConfigurableBar'")
        throw e;
}
