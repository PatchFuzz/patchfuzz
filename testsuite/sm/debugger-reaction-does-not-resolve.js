






function newPromiseCapability() {
    var resolve, reject, promise = new Promise(function(r1, r2) {
        resolve = r1;
        reject = r2;
    });
    return {promise, resolve, reject};
}

function neverCalled() {
    
    
    
    quit(1);
}

var c = 0;
var g_resolve;

var resolvedValues = [];

function resolveCapability(v) {
   resolvedValues.push(v);
}

class P extends Promise {
    constructor(executor) {
        
        
        
        if (c++ > 1) {
            return new Promise(executor);
        }

        executor(resolveCapability, neverCalled);

        var {promise, resolve} = newPromiseCapability();
        g_resolve = resolve;

        
        var p = async function(){ await promise; return 456; }();

        
        
        p.constructor = {
            [Symbol.species]: P
        };

        return p;
    }
}

var {promise: alwaysPending} = newPromiseCapability();


P.race([alwaysPending]).then(neverCalled, neverCalled);

g_resolve(123);

drainJobQueue();


assertEq(resolvedValues.length, 2);
assertEq(resolvedValues[0], alwaysPending);
assertEq(resolvedValues[1], 456);
