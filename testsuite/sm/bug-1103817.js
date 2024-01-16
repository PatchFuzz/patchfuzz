
x = (new Debugger).addDebuggee(newGlobal({newCompartment: true}));
print(x.getOwnPropertyDescriptor('Function').value.proto.script);

(new Debugger).memory.takeCensus();
