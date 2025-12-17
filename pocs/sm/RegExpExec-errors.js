;

print(() => RegExp.prototype.test.call({}), TypeError,
                   /test method called on incompatible Object/);
print(() => RegExp.prototype[Symbol.match].call([]), TypeError,
                   /\[Symbol\.match\] method called on incompatible Array/);
