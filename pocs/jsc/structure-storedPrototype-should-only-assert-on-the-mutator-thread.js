const iterations = 500;
for (let i = 0; i < iterations; i++) {
    let code = `
        for (let i = 0; i < 1000; i++) {
            String.prototype.__proto__ = [];
            const w = 'abcdefg'[-2];
        }
    `;
    runString(code);
}
