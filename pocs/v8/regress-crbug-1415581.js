var proto = {};
function constr() {}
constr.prototype = proto;
obj = new constr();
proto[Symbol.toStringTag] = "foo";
print('[object foo]', obj.toString());
