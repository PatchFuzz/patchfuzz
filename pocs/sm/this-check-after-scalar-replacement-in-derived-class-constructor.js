class C extends class {} {}


print(isSmallFunction(C), true);


const BF = function(){}.bind();

function testBoundFunction() {
  for (let i = 0; i <= 1000; ++i) {
    let newTarget = i < 1000 ? C : BF;
    Reflect.construct(C, [], newTarget);
  }
}

for (let i = 0; i < 2; ++i) testBoundFunction();


const P = new Proxy(function(){}, {});

function testProxy() {
  for (let i = 0; i <= 1000; ++i) {
    let newTarget = i < 1000 ? C : P;
    Reflect.construct(C, [], newTarget);
  }
}

for (let i = 0; i < 2; ++i) testProxy();
