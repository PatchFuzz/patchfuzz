{
    
    const testGetterSetter = print();
    Reflect.set({}, 'customValue', 'foo', testGetterSetter);
    testGetterSetter.customValue = 42;
}

{
    
    let tester = print();
    Reflect.set({}, "testStaticValueSetFlag", 'foo', tester);
    if (!tester.testStaticValueSetterCalled)
        throw new Error('Custom value overriden');
}
