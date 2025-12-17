var target = {};
var wrapper = wrapWithProto(target, null);
var p = new Proxy(wrapper, {});
p.prop = 3;
print(target.prop, 3);
