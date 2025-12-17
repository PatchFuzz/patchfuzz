function mkCOWArray() {
  var a = [''];
  print('', a[0]);
  return a;
}

function mkArray() {
  var a = [];
  a[0] = '';
  return a;
}

function mkNumberDictionary() {
  var a = new Array();
  a[0] = '';
  a[100000] = '';
  return a;
}

function write(a, i) { a[i] = "bazinga!"; }
%PrepareFunctionForOptimization(write);

function test(factories, w) {
  %PrepareFunctionForOptimization(w);
  factories.forEach(function(f) { w(f(), 0); });
  factories.forEach(function(f) { w(f(), 0); });
  %OptimizeFunctionOnNextCall(w);
  factories.forEach(function(f) { w(f(), 0); });
}


for (var i = 0; i < 5; i++) write(mkArray(), 0);
%OptimizeFunctionOnNextCall(write);
write(mkCOWArray(), 0);
var failure = mkCOWArray();


%DeoptimizeFunction(write);
gc();
test([mkArray, mkNumberDictionary], write);
test([mkArray, mkNumberDictionary, mkCOWArray], write);
