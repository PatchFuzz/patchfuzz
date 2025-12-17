const target = {};
const receiver = {};

let count = 0;
function getter() {
  count++;
  print(this, receiver);
}

var x = Math.hypot(1,0);
var y = 2**31 - 1;
var z = -1;

Object.defineProperty(target, x, { get: getter });
Object.defineProperty(target, y, { get: getter });
Object.defineProperty(target, z, { get: getter });

function get(id) {
  return Reflect.get(target, id, receiver);
}

function test() {
  with ({}) {}
  count = 0;
  for (var i = 0; i < 100; i++) {
    get(x);
    get(y);
    get(z);
  }
  print(count, 300);
}


test();


for (var i = 0; i < 10; i++) {
  get("a");
}


test();
