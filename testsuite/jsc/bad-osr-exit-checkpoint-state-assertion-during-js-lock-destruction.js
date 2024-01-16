

let depth;
const limit = 5;
function foo() {
    if (depth >= limit) {
        OSRExit();
        dropAllLocks();
        return 0;
    }
    ++depth;
    foo.apply(null, a);
}
let a = {
    get length() {
        return 0;
    }
};

for (let i = 0; i < 1e5; ++i) {
    depth = 0;
    foo.apply(null, a);
}
