




function shouldBe(expected, actual, msg = "") {
    if (msg)
        msg = " for " + msg;
    if (actual !== expected)
        throw new Error("bad value" + msg + ": " + actual + ". Expected " + expected);
}


let out;

async function longLoop() {
    for (let i = 0; i < 10000; i++)
        await undefined;
    out = 1;
}

longLoop();

drainMicrotasks();

shouldBe(out, 1);
