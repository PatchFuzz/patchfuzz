





























var a = new Array(500);


for (var i = 0; i < a.length; i++) a[i] = {idx:i};


gc();
gc();



a[0] = {idx:0};




a.splice(2, 200);


gc();



assertEquals(0, a[0].idx);
assertEquals(1, a[1].idx);
assertEquals(202, a[2].idx);
