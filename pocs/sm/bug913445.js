var obj = Object.create(null);
print(uneval(obj), "({})");
print(Function.prototype.toSource.call(obj), "({})");
obj.x = 1;
obj.y = 2;
print(uneval(obj), "({x:1, y:2})");

var d = new Date();
delete Date.prototype.toSource;
print(uneval(d), "({})");

delete Object.prototype.toSource;
print(uneval({p: 2+2}), "({p:4})");

print(uneval({toSource: [0]}), "({toSource:[0]})");
