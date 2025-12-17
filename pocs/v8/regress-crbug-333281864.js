class C1 {}
const v3 = new C1();

const foo = {
  "not_const": new C1(),
  3: 1,
  127: 1,
};


for (var i = 0; i < 400; ++i) {
  foo.__proto__ = {};
}


foo.not_const = 9;



Function.x = 1;
function foo2(){};


for (var i = 0; i < 400; ++i) {
  foo2.__proto__ = {};
}
