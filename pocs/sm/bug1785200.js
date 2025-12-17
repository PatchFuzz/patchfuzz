const target = {};
const receiver = {};
const id = 5;

let count = 0;
function getter() {
  count++;
  print(this, receiver);
}
Object.defineProperty(target, id, { get: getter });

for (var i = 0; i < 100; i++) {
  Reflect.get(target, id, receiver);
}
print(count, 100);
