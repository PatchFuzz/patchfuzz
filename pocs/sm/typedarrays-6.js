var values = [Infinity, -Infinity, -0, NaN];
for (var C of [Float32Array, Float64Array]) {
    var i = 0;
    for (var v of new C(values))
        print(v, values[i++]);
    print(i, values.length);
}
