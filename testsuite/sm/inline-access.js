















function f(ta) {
    return (ta[2] = ta[0] + ta[1] + ta.length);
}

var v = new Int32Array(new SharedArrayBuffer(4096));
var sum = 0;
var iter = 1000;
for ( var i=0 ; i < iter ; i++ )
    sum += f(v);
assertEq(sum, v.length * iter);
