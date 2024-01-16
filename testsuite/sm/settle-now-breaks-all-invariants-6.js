

function newPromiseCapability() {
    var resolve, reject, promise = new Promise(function(r1, r2) {
        resolve = r1;
        reject = r2;
    });
    return {promise, resolve, reject};
}


var {promise, resolve} = newPromiseCapability();

var thenable = {
    get then() {
        settlePromiseNow(promise);
    }
};

resolve(thenable);
