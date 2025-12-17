;


if (globalPrototypeChainIsMutable()) {
  __proto__ = null;
  Object.prototype.__proto__ = this;
}


Debugger(newGlobal({newCompartment: true})).memory.takeCensus();
