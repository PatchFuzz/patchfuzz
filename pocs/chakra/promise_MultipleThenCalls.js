let val = -7

let turi = '';
let elog = () => {};
let tlog = (msg, val) => { print(msg); }
if (typeof telemetryLog !== 'undefined') {
    tlog = telemetryLog;
    elog = emitTTDLog;
    turi = ttdLogURI;
}

function addThens()
{
    let resolveFunc;
    const p = new Promise((resolve, reject) => {
        resolveFunc = resolve;
    });
    
    print(() => {
        p.then(() => {
            val = val * 3;
        });
    }, 200);
    
    print(() => {        
        p.then(() => {
            val = val + 21
        });
    }, 300);

    print(resolveFunc, 400);
    print(testFunction, 1000);
}

print(addThens, 100);

function testFunction()
{
    tlog(`val is ${val} (Expect 0)`, true);

    elog(turi);
}
