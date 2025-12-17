function f(a, b) {
  
  
  b[13] = 0;

  
  
  a[0] = 0;

  
  b[0] = 9.431092e-317;
}
%PrepareFunctionForOptimization(f);


let o1a = new Array(1);
o1a[0] = 'a'; 

let o1b = [2147483648]; 



f(o1a, o1b);




let o2a = [0.1]; 



f(o2a, o2a);




let o3 = [, 0.2];

%OptimizeMaglevOnNextCall(f);


f(o3, o3);








