




























var a = [1,2,3];
a.length = 0;
a[0] = 1.4;
assertEquals(1.4, a[0]);
assertEquals(undefined, a[1]);
assertEquals(undefined, a[2]);
assertEquals(undefined, a[3]);


function grow_store(a,i,v) {
  a[i] = v;
}

var a2 = [1.3];
grow_store(a2,1,1.4);
a2.length = 0;
grow_store(a2,0,1.5);
assertEquals(1.5, a2[0]);
assertEquals(undefined, a2[1]);
assertEquals(undefined, a2[2]);
assertEquals(undefined, a2[3]);


var a3 = [1.3];
var o = {};
grow_store(a3, 1, o);
assertEquals(1.3, a3[0]);
assertEquals(o, a3[1]);


function grow_store2(a,i,v) {
  a[i] = v;
}

var a4 = [1.3];
grow_store2(a4,1,1.4);
a4.length = 0;
grow_store2(a4,0,1);
assertEquals(1, a4[0]);
assertEquals(undefined, a4[1]);
assertEquals(undefined, a4[2]);
assertEquals(undefined, a4[3]);
