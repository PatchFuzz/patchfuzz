


oomTest(() => {
        let code = cacheEntry(`
                function f() { }
                f();
        `);
        evaluate(code, { saveIncrementalBytecode: true });
});
