










function cmpxchg(ta) {
    var x = ta[0];
    Atomics.compareExchange(ta, 86, 37, 42);
    var y = ta[1];
    var z = y + 1;
    var w = x + z;
    return w;
}

var sab = new SharedArrayBuffer(4096);
var ia = new Int32Array(sab);
for ( var i=0, limit=ia.length ; i < limit ; i++ )
    ia[i] = 37;
var v = 0;
for ( var i=0 ; i < 1000 ; i++ )
    v += cmpxchg(ia);

