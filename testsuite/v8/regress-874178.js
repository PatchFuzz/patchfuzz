


























function foo(){}
assertTrue(Function.prototype.isPrototypeOf(foo));

foo.bar = 'hello';
assertTrue(foo.propertyIsEnumerable('bar'));
