
let result = null;
let error = null;
let promise = import("");
promise.then((ns) => {
    result = ns;
}).catch((e) => {
    error = e;
});

drainJobQueue();
assertEq(result, null);
assertEq(error instanceof Error, true);


result = null;
error = null;
try {
    result = os.file.readFile(".");
} catch (e) {
    error = e;
}

assertEq(result, null);
assertEq(error instanceof Error, true);
