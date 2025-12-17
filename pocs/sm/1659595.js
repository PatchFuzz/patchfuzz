let a = {
  0: 0,
  1n: 1n,

  get 2() {
    return 2;
  },
  set 2(o) {},

  get 3n() {
    return 3n;
  },
  set 3n(o) {}
};

print(a[0], 0);
print(a[1n], 1n);
print(a[2], 2);
print(a[3n], 3n);

function getterName(x) {
  return Object.getOwnPropertyDescriptor(a, x).get.name
}
function setterName(x) {
  return Object.getOwnPropertyDescriptor(a, x).set.name
}

print(/get 2/.test(getterName(2)), true)
print(/get 3/.test(getterName(3n)), true)

print(/set 2/.test(setterName(2)), true)
print(/set 3/.test(setterName(3n)), true)

let b = {
  0: 0,
  [0]: 'dupe',
  1n: 1,
  [1n]: 'dupe',
  [2]: 2,
  2: 'dupe',
  [3n]: 3,
  3n: 'dupe'
};
print(b[0], 'dupe');
print(b[1n], 'dupe');
print(b[2], 'dupe');
print(b[3n], 'dupe');

let c = {
  0: 0,
  0.0: 'dupe',
};
print(c[0], 'dupe');

let d = {
  0: 0,
  '0': 'dupe',
};
print(d[0], 'dupe');


let {1: x} = {1: 1};
let {1n: y} = {1n: 1n};

print(x, 1);
print(y, 1n);
