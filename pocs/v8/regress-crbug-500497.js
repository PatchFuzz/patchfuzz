var global = [];  

function Ctor() {
  var result = {a: {}, b: {}, c: {}, d: {}, e: {}, f: {}, g: {}};
  return result;
};
%PrepareFunctionForOptimization(Ctor);
gc();

for (var i = 0; i < 120; i++) {
  
  global.push(Ctor().a);
  (function FillNewSpace() {
    new Array(10000);
  })();
}


print(Ctor);





%OptimizeFunctionOnNextCall(Ctor);
for (var i = 0; i < 10000; i++) {
  
  
  Ctor();
}
