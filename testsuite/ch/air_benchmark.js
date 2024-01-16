
"use strict";

const AirBenchmarkCode = String.raw`
<script src="Air/symbols.js"></script>
<script src="Air/tmp_base.js"></script>
<script src="Air/arg.js"></script>
<script src="Air/basic_block.js"></script>
<script src="Air/code.js"></script>
<script src="Air/frequented_block.js"></script>
<script src="Air/inst.js"></script>
<script src="Air/opcode.js"></script>
<script src="Air/reg.js"></script>
<script src="Air/stack_slot.js"></script>
<script src="Air/tmp.js"></script>
<script src="Air/util.js"></script>
<script src="Air/custom.js"></script>
<script src="Air/liveness.js"></script>
<script src="Air/insertion_set.js"></script>
<script src="Air/allocate_stack.js"></script>
<script src="Air/payload-gbemu-executeIteration.js"></script>
<script src="Air/payload-imaging-gaussian-blur-gaussianBlur.js"></script>
<script src="Air/payload-airjs-ACLj8C.js"></script>
<script src="Air/payload-typescript-scanIdentifier.js"></script>
<script src="Air/benchmark.js"></script>
<script>
var results = [];
var benchmark = new AirBenchmark();
var numIterations = 200;
for (var i = 0; i < numIterations; ++i) {
    var before = currentTime();
    benchmark.runIteration();
    var after = currentTime();
    results.push(after - before);
}
reportResult(results);
</script>`;

let runAirBenchmark = null;
if (!isInBrowser) {
    let sources = [
        "Air/symbols.js"
        , "Air/tmp_base.js"
        , "Air/arg.js"
        , "Air/basic_block.js"
        , "Air/code.js"
        , "Air/frequented_block.js"
        , "Air/inst.js"
        , "Air/opcode.js"
        , "Air/reg.js"
        , "Air/stack_slot.js"
        , "Air/tmp.js"
        , "Air/util.js"
        , "Air/custom.js"
        , "Air/liveness.js"
        , "Air/insertion_set.js"
        , "Air/allocate_stack.js"
        , "Air/payload-gbemu-executeIteration.js"
        , "Air/payload-imaging-gaussian-blur-gaussianBlur.js"
        , "Air/payload-airjs-ACLj8C.js"
        , "Air/payload-typescript-scanIdentifier.js"
        , "Air/benchmark.js"
    ];

    runAirBenchmark = makeBenchmarkRunner(sources, "AirBenchmark");
}

const AirBenchmarkRunner = {
    code: AirBenchmarkCode,
    run: runAirBenchmark,
    cells: { },
    name: "Air"
};

if (isInBrowser) {
    AirBenchmarkRunner.cells = {
        firstIteration: document.getElementById("AirFirstIteration"),
        averageWorstCase: document.getElementById("AirAverageWorstCase"),
        steadyState: document.getElementById("AirSteadyState"),
        message: document.getElementById("AirMessage")
    }
}
