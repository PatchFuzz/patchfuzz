function holeArray(sparse) {
    var a = [,,];
    if (sparse)
        a.length = 1000;
    return a;
}

function undefinedArray(sparse) {
    var a = [ undefined, undefined, undefined ];
    if (sparse)
        a.length = 1000;
    return a;
}

var a;
a = new Int32Array(holeArray(false));
print(a[0], 0);
a = new Int32Array(holeArray(true));
print(a[0], 0);
a = new Int32Array(undefinedArray(false));
print(a[0], 0);
a = new Int32Array(undefinedArray(true));
print(a[0], 0);

a = new Float64Array(holeArray(false));
print(a[0], NaN);
a = new Float64Array(holeArray(true));
print(a[0], NaN);
a = new Float64Array(undefinedArray(false));
print(a[0], NaN);
a = new Float64Array(undefinedArray(true));
print(a[0], NaN);
