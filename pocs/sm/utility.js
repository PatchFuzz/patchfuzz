if (getBuildConfiguration("pointer-byte-size") != 8) {
    quit(0);
}


if (getBuildConfiguration("mips64")) {
    quit(0);
}

var eightGB = 8 * 1024 * 1024 * 1024;
var pageSize = 65536;
print(wasmMaxMemoryPages("i64") >= eightGB / pageSize, true);
