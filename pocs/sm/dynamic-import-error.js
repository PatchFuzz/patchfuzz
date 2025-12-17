let result = null;
let error = null;
let promise = import("nonexistent.js");
promise.then((ns) => {
    result = ns;
}).catch((e) => {
    error = e;
});

drainJobQueue();
print(result, null);
print(error instanceof Error, true);
