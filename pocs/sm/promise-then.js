;

ignoreUnhandledRejections();

const g = newGlobal({sameCompartmentAs: this});

let resolve, reject;
let promise = new Promise((resolveFn, rejectFn) => {
    resolve = resolveFn;
    reject = rejectFn;
});


promise.then = g.Promise.prototype.then;


promise.constructor = {
    [Symbol.species]: "not a constructor"
};

async function f(p) {
    await p;
}

let error;
f(promise).catch(e => { error = e; });

resolve(promise);

drainJobQueue();

print(error.constructor === g.TypeError, true);
