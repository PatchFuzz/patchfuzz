for (let i = 0; i < 100; i++) {
  
  
  
  let key = 1073741800 + i;
  var a = { length: 12, 1: 0xFA, [key]: 0xFB };
  %HeapObjectVerify(a);
  print(["1", ""+key, "length"], Object.keys(a));
  
  Array.prototype.sort.call(a);
  %HeapObjectVerify(a);
  print(["0", ""+key, "length"], Object.keys(a));
  
  Array.prototype.sort.call(a);
  %HeapObjectVerify(a);
  print(["0", ""+key, "length"], Object.keys(a));
}
