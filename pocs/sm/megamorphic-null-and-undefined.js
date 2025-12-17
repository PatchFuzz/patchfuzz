let objs = [];

for (let i = 0; i < 100; i++) {
  let obj = {};
  obj["x" + i] = 1;
  obj[undefined] = 2;
  obj[null] = 3;
  objs.push(obj);
}

function foo(obj) {
  print(obj[undefined], 2);
  print(obj[null], 3);
}

for (let i = 0; i < 100; i++) {
  foo(objs[i]);
}
