


gczeal(0);
gcparam('maxNurseryBytes', 16 * 1024 * 1024);
gcparam('minNurseryBytes', 16 * 1024 * 1024);

let a = [];
for (var i = 0; i < 20000; i++) {
    a.push(import("nonexistent.js"));
    Symbol();
}

for (let p of a) {
    p.catch(() => {});
}
