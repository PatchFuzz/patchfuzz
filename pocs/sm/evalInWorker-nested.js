try {
    evalInWorker("evalInWorker('evalInWorker(\"print(1, 1)\")')");
} catch(e) {
    print(e.toString().includes("--no-threads"), true);
}
