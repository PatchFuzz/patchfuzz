var holder = Object.create({}, {
  holderMethod: {value: function() {}}
});
print(%HasFastProperties(holder));


var holder = Object.create(null, {
  holderMethod: {value: function() {}}
});
print(%HasFastProperties(holder));


var receiver = Object.create(holder, {
  killMe: {value: 0, configurable: true},
  keepMe: {value: 0, configurable: true}
});
delete receiver.killMe;
print(%HasFastProperties(receiver));


function callConstantFunctionOnPrototype(obj) {
  obj.holderMethod();
}

%PrepareFunctionForOptimization(callConstantFunctionOnPrototype);
callConstantFunctionOnPrototype(receiver);
callConstantFunctionOnPrototype(receiver);
%OptimizeFunctionOnNextCall(callConstantFunctionOnPrototype);
callConstantFunctionOnPrototype(receiver);


print(callConstantFunctionOnPrototype);
