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


assertEq(proxy.valueProp, 11);
assertEq(proxy.valuePropShadowed, 21);

var propNames = [];
for (var i in proxy)
    propNames.push(i);
assertEq(propNames.length, 4);
assertEq('valueProp' in proxy, true);
assertEq(proxy.hasOwnProperty('valueProp'), false);
assertEq(Object.getOwnPropertyNames(proxy).indexOf('valueProp'), -1);
assertEq('valuePropShadowed' in proxy, true);
assertEq(Object.getOwnPropertyNames(proxy).indexOf('valuePropShadowed') == -1, false);
assertEq(proxy.hasOwnProperty('valuePropShadowed'), true);

proxy.valuePropShadowed = 20;
proxy.valueProp = 10;
assertEq(proxyTarget.valuePropShadowed, 20);
assertEq(proxyTarget.valueProp, 10);

assertEq(proxy.accessorProp, 33);
assertEq(proxy.accessorPropShadowed, -44);

proxy.accessorProp = 32;
proxy.accessorPropShadowed = -43;
assertEq(proxy.accessorProp, 32);
assertEq(proxy.accessorPropShadowed, -43);

assertEq(proto.accessorProp_, 33);
assertEq(proto.accessorPropShadowed_, 44);
assertEq(proto.hasOwnProperty('accessorPropShadowed__'), false);
assertEq(proxyTarget.accessorProp_, 32);
assertEq(proxyTarget.hasOwnProperty('accessorPropShadowed_'), false);
assertEq(proxyTarget.accessorPropShadowed__, -43);



function Constructor() {
    this.foo = 2;
}
Constructor.prototype = proxy;
var child = new Constructor();
assertEq(child.valueProp, 10);
assertEq(child.valuePropShadowed, 20);
var childPropNames = [];
for (var i in child)
    childPropNames.push(i);
assertEq(childPropNames.length, 5);
child.accessorProp = 5;
child.accessorPropShadowed = 6;
assertEq(child.accessorProp, 5);
assertEq(child.accessorPropShadowed, 6);
assertEq(child.accessorProp_, 5);
assertEq(child.accessorPropShadowed__, 6);
