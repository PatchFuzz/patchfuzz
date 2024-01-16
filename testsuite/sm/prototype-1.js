

assertEq(Object.getPrototypeOf(a => a), Function.prototype);
assertEq(Object.getPrototypeOf(() => {}), Function.prototype);
