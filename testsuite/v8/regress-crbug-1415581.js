



var proto = {};
function constr() {}
constr.prototype = proto;
obj = new constr();
proto[Symbol.toStringTag] = "foo";
assertEquals('[object foo]', obj.toString());
