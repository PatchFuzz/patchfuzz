



var K = 2000;			
var s = "[";
var i;
for ( i=0; i < K-1; i++ )
    s = s + `{"i":${i}},`;
s += `{"i":${i}}]`;
var v = JSON.parse(s);

assertEq(v.length == K, true);

for ( i=0; i < K; i++) {
    assertEq(v[i] instanceof Object, true);
    assertEq(v[i].i, i);
}
