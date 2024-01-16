





























var obj = {};
obj[1] = 42;
assertEquals(42, obj[1]);
Object.defineProperty(obj, '1', {value:10, writable:false});
assertEquals(10, obj[1]);


obj[1] = 5;
assertEquals(10, obj[1]);


for(var i = 0; i < 1024; i++) {
  obj[i] = 42;
}

for(var i = 0; i < 1024; i++) {
  Object.defineProperty(obj, i, {value: i, writable:false});
}

for(var i = 0; i < 1024; i++) {
  assertEquals(i, obj[i]);
}

for(var i = 0; i < 1024; i++) {
  obj[1] = 5;
}

for(var i = 0; i < 1024; i++) {
  assertEquals(i, obj[i]);
}
