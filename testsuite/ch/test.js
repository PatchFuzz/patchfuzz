
"use strict";

WScript.LoadScriptFile("all.js");
WScript.LoadScriptFile("payload-gbemu-executeIteration.js");
WScript.LoadScriptFile("payload-imaging-gaussian-blur-gaussianBlur.js");
WScript.LoadScriptFile("payload-airjs-ACLj8C.js");
WScript.LoadScriptFile("payload-typescript-scanIdentifier.js");
WScript.LoadScriptFile("benchmark.js");

let result = runBenchmark();
print("That took " + result + " ms.");
