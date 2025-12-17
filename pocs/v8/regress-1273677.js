function test() {}
function foo() {
  
  
  
  
  
  for (let [x] of --test()) {}
}

%PrepareFunctionForOptimization(foo);
try { foo() } catch {}
%OptimizeFunctionOnNextCall(foo);
try { foo() } catch {}
