function newPromiseCapability() {
    let resolve, reject, promise = new Promise(function(r1, r2) {
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

class P extends Promise {
    constructor(executor) {
        
        
        
        if (c++ > 1) {
            return new Promise(executor);
        }

        
        
        executor(newPromiseCapability().resolve, neverCalled);

        let {promise, resolve} = newPromiseCapability();
        g_resolve = resolve;

        
        return async function(){ await promise; return 456; }();
    }

    
    
    
    
    static resolve(v) {
        return super.resolve(v);
    }
}

let {promise: alwaysPending} = newPromiseCapability();

P.race([alwaysPending]).then(neverCalled, neverCalled);

g_resolve(123);

drainJobQueue();
