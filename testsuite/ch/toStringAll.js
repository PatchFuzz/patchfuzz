




function test(func) {
  console.log(func.toString());
  try {
    var result = func();
    if (result && result.next) {
      result.next();
    }
  } catch (e) {
    
  }
}

function testFunctions() {
  function a() { console.log('a'); }
  test(a);
  var b = () => { console.log('b'); }
  test(b);
  async function c() { console.log('c'); }
  test(c);
  function *d() { console.log('d'); }
  test(d);
}
testFunctions();

var objectMemberTest  = {
  a() { console.log('a'); },
  b: () => { console.log('b'); },
  async c() { console.log('c'); },
  * d() { console.log('d'); },
  ['e']() { console.log('e'); },
  async ['f']() { console.log('f'); },
  * ['g']() { console.log('g'); },
  get() { console.log('get'); },
  set() { console.log('set'); },
  [/]/.exec(']')]() { console.log('regex'); },
  [(function () { return 'h'})()]() { console.log('function'); },
}

for (var i of Object.keys(objectMemberTest)) {
  test(objectMemberTest[i]);
}

var objectAccessorTest = {
  get a() { console.log('getter'); },
  set a(x) { console.log('setter'); },
}

var d = Object.getOwnPropertyDescriptor(objectAccessorTest, 'a');
console.log(d.get.toString())
d.get();
console.log(d.set.toString())
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
    [await 'a']() { console.log("await a"); }
  }
}
awaitTests().then(o => {
  for (var i of Object.keys(o)) {
    test(o[i]);
  }
});

function * yieldTests() {
  return {
    [yield 'a']() { console.log("yield a"); }
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