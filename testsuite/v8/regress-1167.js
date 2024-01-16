






























function test0(n) {
  var a = new Array(n);
  for (var i = 0; i < n; ++i) {
    
    a[i] = void !delete 'object' % ~delete 4;
  }
}


for (var i = 0; i < 5; ++i) {
  for (var j = 1; j < 12; ++j) {
    test0(j * 1000);
  }
}



function test1(n) {
  var a = new Array(n);
  for (var i = 0; i < n; ++i) {
    a[i] = void !-'object' % ~delete 4;
  }
}

for (i = 0; i < 5; ++i) {
  for (j = 1; j < 12; ++j) {
    test1(j * 1000);
  }
}




function side_effect() {}
function observe(x, y) {
  return x;
}
function test2(x) {
  return observe(
      this, (side_effect.observe <= side_effect.side_effect !== false, x + 1));
};
%PrepareFunctionForOptimization(test2);
for (var i = 0; i < 5; ++i) test2(0);
%OptimizeFunctionOnNextCall(test2);
test2(0);
test2(test2);
