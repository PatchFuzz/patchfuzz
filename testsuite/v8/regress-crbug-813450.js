





var constructorArgs = new Array(0x10100);
var constructor = function() {};
var target = new Proxy(constructor, {
  construct: function() {
  }
});
var proxy = new Proxy(target, {
  construct: function(newTarget, args) {
    return Reflect.construct(constructor, []);
  }
});
var instance = new proxy();
var instance2 = Reflect.construct(proxy, constructorArgs);
%HeapObjectVerify(target);
%HeapObjectVerify(proxy);
%HeapObjectVerify(instance);
%HeapObjectVerify(instance2);
