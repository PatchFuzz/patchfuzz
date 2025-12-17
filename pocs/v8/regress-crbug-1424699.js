(async function () {
    await gc({ execution: 'async' });
    d8.terminate();
    const foo = new FinalizationRegistry();
})();
