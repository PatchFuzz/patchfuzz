setJitCompilerOption("baseline.warmup.trigger", 0);
setJitCompilerOption("ion.warmup.trigger", 0);

function ceil(a, b) {
    return Math.ceil((a | 0) / (b | 0)) | 0;
}
function floor(a, b) {
    return Math.floor((a | 0) / (b | 0)) | 0;
}
function round(a, b) {
    return Math.round((a | 0) / (b | 0)) | 0;
}
function intdiv(a, b) {
    return ((a | 0) / (b | 0)) | 0;
}


print(ceil(5, 5), 1);
print(ceil(4, 3), 2);
print(ceil(5, 3), 2);
print(ceil(-4, 3), -1);
print(ceil(-5, 3), -1);


print(floor(5, 5), 1);
print(floor(4, 3), 1);
print(floor(5, 3), 1);
print(floor(-4, 3), -2);
print(floor(-5, 3), -2);


print(round(5, 5), 1);
print(round(4, 3), 1);
print(round(5, 3), 2);
print(round(-4, 3), -1);
print(round(-5, 3), -2);


print(intdiv(5, 5), 1);
print(intdiv(4, 3), 1);
print(intdiv(5, 3), 1);
print(intdiv(-4, 3), -1);
print(intdiv(-5, 3), -1);
