var X = 1.1;
var K = 0.5;

var O = 0;
var result = new Float64Array(2);

%NeverOptimizeFunction(spill);
function spill() {
}

function buggy() {
  var v = X;
  var phi1 = v + K;
  var phi2 = v - K;

  spill();  

  var xmm1 = v;
  var xmm2 = v * v * v;
  var xmm3 = v * v * v * v;
  var xmm4 = v * v * v * v * v;
  var xmm5 = v * v * v * v * v * v;
  var xmm6 = v * v * v * v * v * v * v;
  var xmm7 = v * v * v * v * v * v * v * v;
  var xmm8 = v * v * v * v * v * v * v * v * v;

  
  
  

  for (var x = 0; x < 2; x++) {
    xmm1 += xmm1 * xmm6;
    xmm2 += xmm1 * xmm5;
    xmm3 += xmm1 * xmm4;
    xmm4 += xmm1 * xmm3;
    xmm5 += xmm1 * xmm2;

    
    var t = phi1;
    phi1 = phi2;
    phi2 = t;
  }

  
  
  
  result[0] = O === 0 ? phi1 : phi2;
  result[1] = O !== 0 ? phi1 : phi2;
};
%PrepareFunctionForOptimization(buggy);
function test() {
  buggy();
  print([X + K, X - K], result);
}

test();
test();
%OptimizeFunctionOnNextCall(buggy);
test();
