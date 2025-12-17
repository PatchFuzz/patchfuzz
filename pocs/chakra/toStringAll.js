function test(func) {
  print(func.toString());
  try {
    var result = func();
    if (result && result.next) {
      result.next();
    }
  } catch (e) {
    
  }
}

function testFunctions() {
  function a() { print('a'); }
  test(a);
  var b = () => { print('b'); }
  test(b);
  async function c() { print('c'); }
  test(c);
  function *d() { print('d'); }
  test(d);
}
testFunctions();

var objectMemberTest  = {
  a() { print('a'); },
  b: () => { print('b'); },
  async c() { print('c'); },
  * d() { print('d'); },
  ['e']() { print('e'); },
  async ['f']() { print('f'); },
  * ['g']() { print('g'); },
  get() { print('get'); },
  set() { print('set'); },
  [/]/.exec(']')]() { print('regex'); },
  [(function () { return 'h'})()]() { print('function'); },
}

for (var i of Object.keys(objectMemberTest)) {
  test(objectMemberTest[i]);
}

var objectAccessorTest = {
  get a() { print('getter'); },
  set a(x) { print('setter'); },
}

var d = Object.getOwnPropertyDescriptor(objectAccessorTest, 'a');
print(d.get.toString())
d.get();
print(d.set.toString())
d.set(0);

class ClassTest {
  constructor() {}
  static a() {}
  static async b() {}
  static * c() {}
  static ['d']() {}
  static async ['e']() {}
  static * ['f']() {}

  g() {}
  async h() {}
  * i() {}
  ['j']() {}
  async ['k']() {}
  * ['l']() {}
}

var classInstance = new ClassTest();

for(var i of ['a', 'b', 'c', 'd', 'e', 'f']) {
  test(ClassTest[i]);
}

for(var i of ['g', 'h', 'i', 'j', 'k', 'l']) {
  test(classInstance[i]);
}
test(classInstance.constructor)

async function awaitTests() {
  return {
    [await 'a']() { print("await a"); }
  }
}
awaitTests().then(o => {
  for (var i of Object.keys(o)) {
    test(o[i]);
  }
});

function * yieldTests() {
  return {
    [yield 'a']() { print("yield a"); }
  }
}

var it = yieldTests();
var last;
do {
  last = it.next();
} while (!last.done);
for (var i of Object.keys(last.value)) {
  test(last.value[i]);
}