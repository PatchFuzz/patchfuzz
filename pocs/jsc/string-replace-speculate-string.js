for (;;) {
    (() => {
        function f() {
            return undefined;
        }
        try { f(); } catch (e) {}
        const name = f.name;
        try { name.isWellFormed(); } catch (e) {}
        name.__proto__.replace(name, name);
        for (let i = 0; i < 100; i++) {
        }
    })()
}
