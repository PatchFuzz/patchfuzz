

const isInBrowser = false;

function makeBenchmarkRunner(sources, benchmarkConstructor, numIterations = 200) {
    let source = "'use strict';"
    for (let file of sources) {
        source += read(file);
    }
    source += `
        this.results = [];
        var benchmark = new ${benchmarkConstructor}();
        var numIterations = ${numIterations};
        for (var i = 0; i < numIterations; ++i) {
            var before = currentTime();
            benchmark.runIteration();
            var after = currentTime();
            results.push(after - before);
        }
    `;
    return function doRun() {
        let globalObjectOfScript = WScript.LoadScript(source, 'samethread');
        let results = globalObjectOfScript.results;
        reportResult(results);
    }
}

WScript.LoadScriptFile("driver.js");
WScript.LoadScriptFile("results.js");
WScript.LoadScriptFile("stats.js");
WScript.LoadScriptFile("air_benchmark.js");
WScript.LoadScriptFile("basic_benchmark.js");

WScript.LoadScriptFile("ml_benchmark.js");
WScript.LoadScriptFile("glue.js");

driver.start(6);
