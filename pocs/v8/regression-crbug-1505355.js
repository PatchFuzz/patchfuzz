const v2 = new Int8Array(110);
function f3() {
}
function f7() {
    const v8 = [];
    const v9 = v8.f3;
    v2["toLocaleString"](v9, ...v8, f3(v9, ...v2, v9));
}
const v13 = %PrepareFunctionForOptimization(f7);
f7();
f7();
