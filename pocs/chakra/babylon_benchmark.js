"use strict";

const BabylonBenchmarkCode = String.raw`
<script src="Babylon/index.js"></script>
<script src="Babylon/benchmark.js"></script>
<script>
var results = [];
var benchmark = new BabylonBenchmark();
var numIterations = 200;
for (var i = 0; i < numIterations; ++i) {
    var before = currentTime();
    benchmark.runIteration();
    var after = currentTime();
    results.push(after - before);
}
reportResult(results);
</script>`;


let runBabylonBenchmark = null;
if (!isInBrowser) {
    let sources = [
        "Babylon/index.js"
        , "Babylon/benchmark.js"
    ];

    runBabylonBenchmark = makeBenchmarkRunner(sources, "BabylonBenchmark");
}

const BabylonBenchmarkRunner = {
    name: "Babylon",
    code: BabylonBenchmarkCode,
    run: runBabylonBenchmark,
    cells: {}
};

if (isInBrowser) {
    BabylonBenchmarkRunner.cells = {
        firstIteration: document.getElementById("BabylonFirstIteration"),
        averageWorstCase: document.getElementById("BabylonAverageWorstCase"),
        steadyState: document.getElementById("BabylonSteadyState"),
        message: document.getElementById("BabylonMessage")
    };
}
