setSharedObject(0);
evalInWorker(`
    try {
        oomTest(crash);
    } catch (e) {
        if (e.toString().includes("main thread")) {
            setSharedObject(1);
        }
    }
`);

while (getSharedObject() != 1) {
    
}
