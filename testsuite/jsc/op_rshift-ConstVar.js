





load("./resources/binary-op-test.js", "caller relative");




var opName = "rshift";
var op = ">>";

load("./resources/binary-op-values.js", "caller relative");

tests = [];
generateBinaryTests(tests, opName, op, "ConstVar", values, values);

run();
