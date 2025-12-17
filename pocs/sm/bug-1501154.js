let result = null;
let error = null;
let promise = import("");
promise.then((ns) => {
    result = ns;
}).catch((e) => {
    error = e;
});

drainJobQueue();
print(result, null);
print(error instanceof Error, true);


result = null;
error = null;
try {
    result = os.file.readFile(".");
} catch (e) {
    error = e;
}

print(result, null);
print(error instanceof Error, true);
