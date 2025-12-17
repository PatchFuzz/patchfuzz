ignoreUnhandledRejections();

oomTest(async function() {
    let m = parseModule(``);
    moduleLink(m);
    await moduleEvaluate(m);
});
