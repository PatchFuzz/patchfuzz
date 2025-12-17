var obj = {
  a: 1,
  b: 2,
  q: 3
};
obj[44] = 44;
Object.defineProperty(obj, "c", {
  get: () => 7,
  enumerable: true
});
obj2 = JSON.parse(JSON.stringify(obj));
gc();
print(obj, obj2);
