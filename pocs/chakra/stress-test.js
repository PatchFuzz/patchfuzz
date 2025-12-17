"use strict";

load("ast.js");
load("basic.js");
load("caseless_map.js");
load("lexer.js");
load("number.js");
load("parser.js");
load("random.js");
load("state.js");
load("util.js");
load("benchmark.js");

let benchmark = new BasicBenchmark();
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

