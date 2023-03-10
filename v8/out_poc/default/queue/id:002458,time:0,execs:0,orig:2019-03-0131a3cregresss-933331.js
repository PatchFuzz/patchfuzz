





function opt(r, flag){
  var x;
  for(let i = 0; i < 2; i++){
    r[2] = 0;
    x = r[0] << (flag ? r[0] : flag)
  }
  return x;
}

ar = [3.1];
%PrepareFunctionForOptimization(opt);
opt(ar,1);
opt(ar,1);
%OptimizeFunctionOnNextCall(opt);
print(24, opt(ar,1));
