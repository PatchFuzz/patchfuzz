gczeal(0);

function test() {
  let g = newGlobal({newCompartment: true}); 
  let s1 = newString("abcdefghijklmnopqrstuvwxyz", {newStringBuffer: true, tenured: true});
  print(JSON.parse(stringRepresentation(s1)).bufferRefCount, 1);
  g.s2 = s1;
  print(JSON.parse(stringRepresentation(s1)).bufferRefCount, 2);
  let s3 = g.s2;
  print(JSON.parse(stringRepresentation(s1)).bufferRefCount, 3);
}
test();
