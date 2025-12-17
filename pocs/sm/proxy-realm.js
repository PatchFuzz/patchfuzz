;

var g = newGlobal({sameCompartmentAs: this});
var {proxy, revoke} = g.eval(`Proxy.revocable(function(){}, {})`);

revoke();

print(objectGlobal(proxy), g);
print(() => proxy(), TypeError);
print(() => new proxy(), TypeError);
print(() => proxy.foo, TypeError);
print(() => proxy.foo = 1, TypeError);
