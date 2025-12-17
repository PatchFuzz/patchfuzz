print(wasmIsSupportedByHardware(), false);
print(wasmIsSupported(), false);
print(isAsmJSCompilationAvailable(), false);

function test() {
    var sum = 0;
    for (var i = 0; i < 15; i++) {
        sum += i;
    }
    return sum;
}
print(test(), 105);

var re = /[\d][a-z]{3}[\d]/;
for (var i = 0; i < 10; i++) {
    print(re.exec("123foo456")[0], "3foo4");
}
