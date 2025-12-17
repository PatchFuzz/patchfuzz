let x = 0;    
x = -12.65;   

function write(a) {
  x = a;
}


let y = x;


%PrepareFunctionForOptimization(write);
write(2.2);
write(-7.8);
%OptimizeFunctionOnNextCall(write);
write(2.2);

print(x, 2.2);
print(y, -12.65);
