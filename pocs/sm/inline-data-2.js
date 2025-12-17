let result = null;
let error = null;
let promise = import("javascript: export let b = 100;");
promise.then((ns) => {
    result = ns;
}).catch((e) => {
    error = e;
});

drainJobQueue();
print(error, null);
print(result.b, 100);
