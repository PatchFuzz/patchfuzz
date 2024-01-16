


var target = {};
var wrapper = wrapWithProto(target, null);
var p = new Proxy(wrapper, {});
p.prop = 3;
assertEq(target.prop, 3);
