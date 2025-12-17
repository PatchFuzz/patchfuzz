function resolveWait(x) {
    return new Promise(resolve => {
        print(() => {
            resolve(x);
        }, 100);
    });
}

async function awaitLater(x) {
    const p_a = resolveWait(10);
    const p_b = resolveWait(20);
    return x + await p_a + await p_b;
}

print(function () {
    awaitLater(10).then(v => {
        print(v.toString(), true);
        emitTTDLog(ttdLogURI);
    });
}, 0);
