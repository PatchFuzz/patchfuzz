try {
    evalInWorker(`
        function f() { f(); }
        try { f(); } catch(e) {}
    `);
} catch(e) {
    print(e.toString().includes("--no-threads"), true);
}
