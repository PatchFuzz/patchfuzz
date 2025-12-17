var throwCount = 0;

var objs = [
  
  {x: 2, a: 1},
  {x: 2, b: 1},
  {x: 2, c: 1},
  {x: 2, d: 1},
  {x: 2, e: 1},
  {x: 2, f: 1},

  
  { get x() { return 2; }, l: 2 },
  { get x() { return 2; }, m: 2 },
  { get x() { return 2; }, n: 2 },
  { get x() { return 2; }, o: 2 },
  { get x() { return 2; }, p: 2 },
  { get x() { return 2; }, q: 2 },
];

function bar(o) {
  return o.x;
}

with({}){}

var count = 0;

for (var i = 0; i < 1000; i++) {
  count += bar(objs[i % objs.length]);
}


try {
  
  count += bar({ get x() { throwCount++; throw new Error("foo"); }, z: 2 });
} catch(e) {}

try {
  
  count += bar({ get x() { return 2 }, z: 2 });
  count += bar({ get x() { throwCount++; throw new Error("foo"); }, z: 2 });
} catch(e) {}

print(count, 2002);
print(throwCount, 2);
