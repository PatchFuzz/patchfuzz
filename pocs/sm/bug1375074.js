var K = 2000;			
var s = "[";
var i;
for ( i=0; i < K-1; i++ )
    s = s + `{"i":${i}},`;
s += `{"i":${i}}]`;
var v = JSON.parse(s);

print(v.length == K, true);

for ( i=0; i < K; i++) {
    print(v[i] instanceof Object, true);
    print(v[i].i, i);
}
