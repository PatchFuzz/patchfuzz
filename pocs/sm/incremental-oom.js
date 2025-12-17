oomTest(() => {
        let code = cacheEntry(`
                function f() { }
                f();
        `);
        evaluate(code, { saveBytecodeWithDelazifications: true });
});
