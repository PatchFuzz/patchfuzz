function ignore(){}




let outer_array = [ignore];

function foo(a) {
    
    
    
    let inner_array = [null, , null];

    
    inner_array[0];

    
    
    
    
    a.forEach(Array.prototype.forEach, inner_array);
}

%PrepareFunctionForOptimization(foo);
foo(outer_array);
foo(outer_array);
%OptimizeMaglevOnNextCall(foo);
foo(outer_array);
