

for (let i=0; i<1e4; i++) {
    let x = Atomics.isLockFree(0);
    try {
        eval('a');
    } catch {}
}
