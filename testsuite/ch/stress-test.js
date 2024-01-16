
"use strict";

load("all.js");
load("payload-gbemu-executeIteration.js");
load("payload-imaging-gaussian-blur-gaussianBlur.js");
load("payload-airjs-ACLj8C.js");
load("payload-typescript-scanIdentifier.js");
load("benchmark.js");

let benchmark = new AirBenchmark();
let before = preciseTime();


for (let i = 0; i < 10; ++i) {
    print("Running mandatory iteration #" + (i + 1) + ":");
    benchmark.runIteration();
}


while (preciseTime() < before + 2) {
    print("Running bonus iteration:");
    benchmark.runIteration();
}

print("Success!");



