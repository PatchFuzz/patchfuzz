var g1 = newGlobal();
var g2 = newGlobal();

schedulezone(g1);
schedulezone(g2);
gcslice(0); 
schedulezone(g1);
gcslice(1);
gcslice();
