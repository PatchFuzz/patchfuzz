

function newPromiseCapability(newTarget) {
    var resolve, reject, promise = Reflect.construct(Promise, [function(r1, r2) {
        resolve = r1;
        reject = r2;
    }], newTarget);
    return {promise, resolve, reject};
}

var g = newGlobal();

var {promise, reject} = newPromiseCapability(g.Promise);

g.settlePromiseNow(promise);


reject(0);
