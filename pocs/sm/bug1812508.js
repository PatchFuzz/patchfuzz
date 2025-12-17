let toBeIncremented = 0;
function megamorphicGetIncremented(thisIsMegamorphic, thisIsAlwaysTrue) {
  
  
  let key = thisIsAlwaysTrue ? "foo" : thisIsMegamorphic.bob;

  
  if (!thisIsMegamorphic[key]) {
    
    thisIsMegamorphic[key] = ++toBeIncremented;
  }
  
  return thisIsMegamorphic[key];
}



let objShapes = [
  {a: 1},
  
  
  
  
  {b: 1, baz: 2, foo: false},
  {c: 1},
  {d: 1, baz: 2, foo: false},
  {e: 1},
  {f: 1, baz: 2, foo: false},
  {g: 1},
  {h: 1, baz: 2, foo: false},
  {i: 1},
  {j: 1, baz: 2, foo: false},
  {k: 1},
  {l: 1, baz: 2, foo: false},
  {m: 1},
  {n: 1, baz: 2, foo: false},
  {o: 1},
  {p: 1, baz: 2, foo: false},
  {q: 1},
  {r: 1, baz: 2, foo: false},
  {s: 1},
  {t: 1, baz: 2, foo: false},
];
let objs = [];
for (let i = 0; i < 100; i++) {
  let obj = Object.assign({}, objShapes[i % objShapes.length]);
  objs.push(obj);
}

for (let i = 1; i < 100; i++) {
  let id = megamorphicGetIncremented(objs[i], true);
  print(id, i);
}
