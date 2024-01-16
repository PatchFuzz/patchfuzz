




function resolveWait(x) {
    return new Promise(resolve => {
        WScript.SetTimeout(() => {
            resolve(x);
        }, 100);
    });
}

async function awaitImm(x) {
    const a = await resolveWait(1);
    const b = await resolveWait(2);
    return x + a + b;
}

awaitImm(1).then(v => {
    telemetryLog(v.toString(), true);
    emitTTDLog(ttdLogURI);
});
