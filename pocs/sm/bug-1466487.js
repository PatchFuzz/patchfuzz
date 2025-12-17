evalInWorker(`
    let m = parseModule("import.meta;");
    moduleLink(m);
    moduleEvaluate(m);
`);
