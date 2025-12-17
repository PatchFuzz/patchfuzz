"use strict";

const BasicBenchmarkCode = String.raw`
<script src="Basic/ast.js"></script>
<script src="Basic/basic.js"></script>
<script src="Basic/caseless_map.js"></script>
<script src="Basic/lexer.js"></script>
<script src="Basic/number.js"></script>
<script src="Basic/parser.js"></script>
<script src="Basic/random.js"></script>
<script src="Basic/state.js"></script>
<script src="Basic/util.js"></script>
<script src="Basic/benchmark.js"></script>
<script>
var results = [];
var benchmark = new BasicBenchmark();
var numIterations = 200;
for (var i = 0; i < numIterations; ++i) {
    var before = currentTime();
    benchmark.runIteration();
    var after = currentTime();
    results.push(after - before);
}
reportResult(results);
</script>`;


let runBasicBenchmark = null;
if (!isInBrowser) {
    let sources = [
        "Basic/ast.js"
        , "Basic/basic.js"
        , "Basic/caseless_map.js"
        , "Basic/lexer.js"
        , "Basic/number.js"
        , "Basic/parser.js"
        , "Basic/random.js"
        , "Basic/state.js"
        , "Basic/util.js"
        , "Basic/benchmark.js"
    ];

    runBasicBenchmark = makeBenchmarkRunner(sources, "BasicBenchmark");
}

const BasicBenchmarkRunner = {
    name: "Basic",
    code: BasicBenchmarkCode,
    run: runBasicBenchmark,
    cells: {}
};

if (isInBrowser) {
    BasicBenchmarkRunner.cells = {
        firstIteration: document.getElementById("BasicFirstIteration"),
        averageWorstCase: document.getElementById("BasicAverageWorstCase"),
        steadyState: document.getElementById("BasicSteadyState"),
        message: document.getElementById("BasicMessage")
    };
}
