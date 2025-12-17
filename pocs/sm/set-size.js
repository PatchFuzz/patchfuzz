function testEmpty() {
  let set = new Set();
  for (let i = 0; i < 100; ++i) {
    print(set.size, 0);
  }
}
for (let i = 0; i < 2; ++i) testEmpty();

function testSimple() {
  let set = new Set([1, 2, 3, 4]);
  for (let i = 0; i < 100; ++i) {
    print(set.size, 4);
  }
}
for (let i = 0; i < 2; ++i) testSimple();

function testWithDelete() {
  for (let i = 0; i < 100; ++i) {
    let a = [1, 2, 3, 4];
    let set = new Set(a);
    for (let j = 0; j < a.length; ++j) {
      print(set.size, a.length - j);
      set.delete(a[j]);
      print(set.size, a.length - j - 1);
    }
    print(set.size, 0);
  }
}
for (let i = 0; i < 2; ++i) testWithDelete();

function testWithAdd() {
  for (let i = 0; i < 100; ++i) {
    let a = [1, 2, 3, 4];
    let set = new Set();
    for (let j = 0; j < a.length; ++j) {
      print(set.size, j);
      set.add(a[j]);
      print(set.size, j + 1);
    }
    print(set.size, a.length);
  }
}
for (let i = 0; i < 2; ++i) testWithAdd();
