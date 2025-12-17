"use strict";


var holder = {
  f: function() {
    return 42;
  }
};
var receiver = {};
receiver.__proto__ = {};
receiver.__proto__.__proto__ = holder;


function h(o) {
  return o.f.apply(this, arguments);
}
function g(o) {
  return h(o);
}


;
%PrepareFunctionForOptimization(g);
print(42, g(receiver));
print(42, g(receiver));



receiver.__proto__.__proto__ = {};


%OptimizeFunctionOnNextCall(g);

print(function() {
  g(receiver);
});


receiver.__proto__.__proto__ = holder;
print(42, g(receiver));
