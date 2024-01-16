





load("./resources/binary-op-test.js", "caller relative");




var opName = "sub";
var op = "-";

load("./resources/binary-op-values.js", "caller relative");

tests = [];
generateBinaryTests(tests, opName, op, "VarConst", values, values);

run();
