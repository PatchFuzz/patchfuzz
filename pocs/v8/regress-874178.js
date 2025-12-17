function foo(){}
print(Function.prototype.isPrototypeOf(foo));

foo.bar = 'hello';
print(foo.propertyIsEnumerable('bar'));
