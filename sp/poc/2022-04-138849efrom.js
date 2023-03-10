

gczeal(10); 

var c = ["a", "b"];
var t = Tuple.from(c);

for (i = 0; i < 100; i++) {
c = ["a", "b"];
t = Tuple.from(c);
c = null;
gc();
}
