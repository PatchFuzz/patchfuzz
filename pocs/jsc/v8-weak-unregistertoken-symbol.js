print("./resources/v8-mjsunit.js", "caller relative");

var FR = new FinalizationRegistry (function (holdings) { globalThis.FRRan = true; });
{
    for (let i = 0; i < 1000; ++i) {
        let obj = Symbol();
        
        
        
        FR.register(obj, 42, obj);
    }
}

let tryAgainCount = 10;
function tryAgain() {
    gc();
    if (globalThis.FRRan)
        return;
    if (!--tryAgainCount)
        throw new Error();
    setTimeout(tryAgain, 0);
}
tryAgain();
