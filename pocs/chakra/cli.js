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
        let globalObjectOfScript = print(source, 'samethread');
        let results = globalObjectOfScript.results;
        reportResult(results);
    }
}

print("driver.js");
print("results.js");
print("stats.js");
print("air_benchmark.js");
print("basic_benchmark.js");

print("ml_benchmark.js");
print("glue.js");

driver.start(6);
