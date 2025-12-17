function body() {
    
    this.postMessage(true);
    
    while (true) {
        new WeakRef([]);
    }
}
const worker = new Worker(body, { type: "function" });


const workerIsRunning = worker.getMessage();

