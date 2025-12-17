let nextId = 0;

let weakRef;
let savedCallback;

const tests = [
  function() {
    let object = { id: ++nextId };
    console.log(`created object ${object.id}`);
    savedCallback = () => {};
    weakRef = new WeakRef(object);
  },
  async function() {
    let object = { id: ++nextId };
    console.log(`created object ${object.id}`);
    savedCallback = () => {};
    weakRef = new WeakRef(object);
  },
  async function() {
    function* gen() {
      {
        let object = { id: ++nextId };
        console.log(`created object ${object.id}`);
        
        
        yield 1;
        weakRef = new WeakRef(object);
      }
      
      yield 2;
    }
    let iter = gen();
    print(iter.next().value, 1);
    print(iter.next().value, 2);
    savedCallback = iter;  
  }
];

(async () => {
  for (const test of tests) {
    await test();
    print(!!weakRef.deref(), true);
    clearKeptObjects();
    gc();
    if (weakRef.deref()) {
      throw new Error(`object ${nextId} was not collected`);
    }
  }
})();
