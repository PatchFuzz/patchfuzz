



o = Object("A");
o.x = 1;
Object.seal(o);
o.x = 0.1

o[1] = "b";
assertEquals(undefined, o[1]);
