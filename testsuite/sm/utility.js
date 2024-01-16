


var conf = getBuildConfiguration();


if (conf["pointer-byte-size"] != 8) {
    quit(0);
}


if (conf["mips64"]) {
    quit(0);
}

var eightGB = 8 * 1024 * 1024 * 1024;
var pageSize = 65536;
assertEq(wasmMaxMemoryPages("i64") >= eightGB / pageSize, true);
