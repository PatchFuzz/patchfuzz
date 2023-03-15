

gczeal(14);

var c = #["a", "b", "c"]; 
var t;

for (i = 0; i < 2; i++) {
    
    t = c.with(1, "x");
    
    gc();
}
