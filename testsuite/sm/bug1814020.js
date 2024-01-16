const dbg = newGlobal({ sameZoneAs: this }).Debugger(this);

async function* inspectingGenerator() {
    await undefined;

    const frame = dbg.getNewestFrame();
    const asyncPromise = frame.asyncPromise;
    assertEq(asyncPromise.getPromiseReactions().length, 0);
}

async function* emptyGenerator() {}

const gen = inspectingGenerator();
const inspectingGenPromise = gen.next();

const emptyGen = emptyGenerator();

emptyGen.next();



emptyGen.return(inspectingGenPromise);



drainJobQueue();