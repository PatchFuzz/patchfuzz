



let nfinalized = 0;
let finalizers = new FinalizationRegistry(f => { nfinalized++; });

class A {
  constructor(callback) {
    this.b = {callback};
    finalizers.register(this, this.b, this);
  }
}

const LOOP_COUNT = 200;
const FINALIZER_COUNT = 200;

async function main() {
  for (let j = 0; j < LOOP_COUNT; j++) {
    for (let i = 0; i < FINALIZER_COUNT; i++) {
      let console = globalThis.console;
      let obj = new A(() => console.log("hello"));
    }
    drainJobQueue();
  }

  gc();
  drainJobQueue();
  assertEq(nfinalized, LOOP_COUNT * FINALIZER_COUNT, "all objects should be finalized");
}
main();
