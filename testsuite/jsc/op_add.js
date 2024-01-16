




load("./resources/binary-op-test.js", "caller relative");




var opName = "add";
var op = "+";

var o1 = {
    valueOf: function() { return 10; }
};

var posInfinity = 1 / 0;
var negInfinity = -1 / 0;

var values = [
    'o1',
    'null',
    'undefined',
    'true',
    'false',

    'NaN',
    'posInfinity',
    'negInfinity',
    '100.2', 
    '-100.2',
    '54294967296.2923', 
    '-54294967296.2923',

    '0',
    '-0',
    '1',
    '-1',
    '0x3fff',
    '-0x3fff',
    '0x7fff',
    '-0x7fff',
    '0x10000',
    '-0x10000',
    '0x7ffffff',
    '-0x7ffffff',
    '0x100000000',
    '-0x100000000',

    '"abc"',
    '"0"',
    '"-0"',
    '"1"',
    '"-1"',
];

tests = [];
generateBinaryTests(tests, opName, op, "VarVar", values, values);
generateBinaryTests(tests, opName, op, "VarConst", values, values);
generateBinaryTests(tests, opName, op, "ConstVar", values, values);

run();
