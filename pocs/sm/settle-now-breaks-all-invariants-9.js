function newPromiseCapability() {
    var resolve, reject, promise = new Promise(function(r1, r2) {
        resolve = r1;
        reject = r2;
    });
    return {promise, resolve, reject};
}


var {promise, resolve, reject} = newPromiseCapability();

settlePromiseNow(promise);

print(resolve(0), undefined);
print(reject(0), undefined);
