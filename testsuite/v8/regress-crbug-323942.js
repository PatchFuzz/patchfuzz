




























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
assertEquals(42, g(receiver));
assertEquals(42, g(receiver));



receiver.__proto__.__proto__ = {};


%OptimizeFunctionOnNextCall(g);

assertThrows(function() {
  g(receiver);
});


receiver.__proto__.__proto__ = holder;
assertEquals(42, g(receiver));
