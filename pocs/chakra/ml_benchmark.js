"use strict";

const MLBenchmarkCode = String.raw`
<script src="ml/index.js"></script>
<script src="ml/benchmark.js"></script>
<script>
var results = [];
var benchmark = new MLBenchmark();
var numIterations = 60;
for (var i = 0; i < numIterations; ++i) {
    var before = currentTime();
    benchmark.runIteration();
    var after = currentTime();
    results.push(after - before);
}
reportResult(results);
</script>`;


let runMLBenchmark = null;
if (!isInBrowser) {
    let sources = [
        "ml/index.js"
        , "ml/benchmark.js"
    ];

    runMLBenchmark = makeBenchmarkRunner(sources, "MLBenchmark", 60);
}

const MLBenchmarkRunner = {
    name: "ML",
    code: MLBenchmarkCode,
    run: runMLBenchmark,
    cells: {}
};

if (isInBrowser) {
    MLBenchmarkRunner.cells = {
        firstIteration: document.getElementById("MLFirstIteration"),
        averageWorstCase: document.getElementById("MLAverageWorstCase"),
        steadyState: document.getElementById("MLSteadyState"),
        message: document.getElementById("MLMessage")
    };
}
