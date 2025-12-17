var P = newGlobal().eval(`
(class extends Promise {
    static resolve(o) {
        return o;
    }
});
`);
var alwaysPending = new Promise(() => {});
function neverCalled() {
    print(true, false);
}
P.race([alwaysPending]).then(neverCalled, neverCalled);

