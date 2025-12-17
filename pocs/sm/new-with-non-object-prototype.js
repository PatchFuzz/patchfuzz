function test(proto) {
  function Klass() {
    this.prop = 1;
  }
  Klass.prototype = proto;

  const N = 100;

  let c = 0;
  for (let i = 0; i < N; ++i) {
    
    let o = new Klass();

    
    
    c += o.prop;

    
    
    print(Object.getPrototypeOf(o), Object.prototype);
  }

  print(c, N);
}

const primitivesTypes = [
  undefined,
  null,
  123,
  true,
  "str",
  Symbol(),
  123n,
];

for (let primitive of primitivesTypes) {
  
  let fn = Function(`return ${test}`)();

  fn(primitive);
}



function testCrossRealm(proto) {
  const otherGlobal = newGlobal();
  const Klass = otherGlobal.eval(`
    function Klass() {
      this.prop = 1;
    }
    Klass;
  `);
  Klass.prototype = proto;

  const N = 100;

  let c = 0;
  for (let i = 0; i < N; ++i) {
    
    let o = new Klass();

    
    
    c += o.prop;

    
    
    print(Object.getPrototypeOf(o), otherGlobal.Object.prototype);
  }

  print(c, N);
}

for (let primitive of primitivesTypes) {
  
  let fn = Function(`return ${testCrossRealm}`)();

  fn(primitive);
}



function testCrossRealmNewTarget(proto) {
  const otherGlobal = newGlobal();
  const Klass = otherGlobal.eval(`
    function Klass() {}
    Klass;
  `);
  Klass.prototype = proto;

  class C {
    constructor() {
      this.prop = 1;
    }
  }

  class D extends C {
    constructor() {
      super();
    }
  }

  const N = 100;

  let c = 0;
  for (let i = 0; i < N; ++i) {
    
    let o = Reflect.construct(D, [], Klass);

    
    
    c += o.prop;

    
    
    print(Object.getPrototypeOf(o), otherGlobal.Object.prototype);
  }

  print(c, N);
}

for (let primitive of primitivesTypes) {
  
  let fn = Function(`return ${testCrossRealmNewTarget}`)();

  fn(primitive);
}
