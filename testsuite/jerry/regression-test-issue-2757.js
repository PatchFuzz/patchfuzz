













var v1 = (new Int8Array (149)).subarray (78);
var v1ToString = v1.toString ();
v1.set (v1);
assert (v1ToString === v1.toString ());
