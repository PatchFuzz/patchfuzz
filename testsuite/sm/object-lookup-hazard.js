

Object.prototype.get = function() {};
assertEq(({a: 1}).__lookupGetter__("a"), undefined);
delete Object.prototype.get;

Object.prototype.set = function() {};
assertEq(({a: 1}).__lookupSetter__("a"), undefined);
