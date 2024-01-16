




var externalContextPromise = (function () {
    let resolvePromise;
    let promise = new Promise((resolve, reject) => {
        resolvePromise = resolve;

    });
    promise = promise.then(()=> {
        throw new Error("error from externalContextPromise1");
    })

    return {
        promise,
        resolvePromise
    };
})();
