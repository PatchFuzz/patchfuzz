;

var global = this;
var status = "pass";



var metaHandler = {
  get: _ => { status = "SMASH"; },
  has: _ => { status = "SMASH"; },
  invoke: _ => { status = "SMASH"; }
};
var handler = new Proxy({}, metaHandler);



var angryProxy = new Proxy(Object.create(null), handler);
if (globalPrototypeChainIsMutable()) {
  this.__proto__ = angryProxy;
  Object.prototype.__proto__ = angryProxy;
}


this.nonExistingProperty;
if (globalPrototypeChainIsMutable())
  print(status, "SMASH");
else
  print(status, "pass");


status = "pass";
Map;
ArrayBuffer;
Date;
print(status, "pass");
