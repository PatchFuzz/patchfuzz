async function parseAndEvaluate(source, filename, kind) {
    let m = parseModule(source, filename, kind);
    moduleLink(m);
    return await moduleEvaluate(m);
}

(async () => {
  print(await parseAndEvaluate("[]", "", "js"), undefined);
  print(await parseAndEvaluate("[]", "", "json"), undefined);
})();
drainJobQueue();
