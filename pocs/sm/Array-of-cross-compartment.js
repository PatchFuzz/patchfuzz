var g = newGlobal();
var ga = g.Array.of(1, 2, 3);
print(ga instanceof g.Array, true);

g.Array.of = Array.of;
var a = g.Array.of(1, 2, 3); 
print(ga instanceof g.Array, true);  
