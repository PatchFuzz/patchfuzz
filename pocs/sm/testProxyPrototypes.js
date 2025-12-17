"use strict"

function makeAccessorProp(obj, propName, initialValue, hiddenName) {
    if (!hiddenName)
        hiddenName = propName + '_';
    if (initialValue)
        Object.defineProperty(obj, hiddenName, { value: initialValue, writable: true, enumerable: false });
    Object.defineProperty(obj, propName,
                          { configurable: true,
                            enumerable: true,
                            get: function()  { return this[hiddenName]; },
                            set: function(x) {
                                     Object.defineProperty(this, hiddenName, { value: x, writable: true, enumerable: false });
                                 }
                           });
}


var proto = {valueProp: 11, valuePropShadowed: 22};
makeAccessorProp(proto, 'accessorProp', 33);
makeAccessorProp(proto, 'accessorPropShadowed', 44);


var proxyTarget = {valuePropShadowed: 21};
makeAccessorProp(proxyTarget, 'accessorPropShadowed', -44, 'accessorPropShadowed__');
var proxy = wrapWithProto(proxyTarget, proto);


print(proxy.valueProp, 11);
print(proxy.valuePropShadowed, 21);

var propNames = [];
for (var i in proxy)
    propNames.push(i);
print(propNames.length, 4);
print('valueProp' in proxy, true);
print(proxy.hasOwnProperty('valueProp'), false);
print(Object.getOwnPropertyNames(proxy).indexOf('valueProp'), -1);
print('valuePropShadowed' in proxy, true);
print(Object.getOwnPropertyNames(proxy).indexOf('valuePropShadowed') == -1, false);
print(proxy.hasOwnProperty('valuePropShadowed'), true);

proxy.valuePropShadowed = 20;
proxy.valueProp = 10;
print(proxyTarget.valuePropShadowed, 20);
print(proxyTarget.valueProp, 10);

print(proxy.accessorProp, 33);
print(proxy.accessorPropShadowed, -44);

proxy.accessorProp = 32;
proxy.accessorPropShadowed = -43;
print(proxy.accessorProp, 32);
print(proxy.accessorPropShadowed, -43);

print(proto.accessorProp_, 33);
print(proto.accessorPropShadowed_, 44);
print(proto.hasOwnProperty('accessorPropShadowed__'), false);
print(proxyTarget.accessorProp_, 32);
print(proxyTarget.hasOwnProperty('accessorPropShadowed_'), false);
print(proxyTarget.accessorPropShadowed__, -43);



function Constructor() {
    this.foo = 2;
}
Constructor.prototype = proxy;
var child = new Constructor();
print(child.valueProp, 10);
print(child.valuePropShadowed, 20);
var childPropNames = [];
for (var i in child)
    childPropNames.push(i);
print(childPropNames.length, 5);
child.accessorProp = 5;
child.accessorPropShadowed = 6;
print(child.accessorProp, 5);
print(child.accessorPropShadowed, 6);
print(child.accessorProp_, 5);
print(child.accessorPropShadowed__, 6);
