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

var {promise, resolve} = newPromiseCapability();

var getterCount = 0;

class P extends Promise {
    constructor(executor) {
        var {promise, resolve, reject} = newPromiseCapability();

        executor(function(v) {
            
            resolve(v);

            
            
            
            
            return {
                get then() {
                    getterCount++;
                }
            };
        }, neverCalled);

        return promise;
    }

    
    
    
    static resolve(v) {
        return Promise.resolve(v);
    }
}

P.race([promise]);

resolve(0);

drainJobQueue();

assertEq(getterCount, 1);
