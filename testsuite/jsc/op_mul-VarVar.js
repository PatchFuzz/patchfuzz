





load("./resources/binary-op-test.js", "caller relative");




var opName = "mul";
var op = "*";

load("./resources/binary-op-values.js", "caller relative");

tests = [];
generateBinaryTests(tests, opName, op, "VarVar", values, values);

run();
