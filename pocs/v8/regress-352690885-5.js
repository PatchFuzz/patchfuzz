for (let j = 0; j < 10; j++) {
  new class {
    constructor() {
      try {
        new class {
          [new class extends(() => {
             super.__proto__;
             return Object;
           })() {}()] = eval();
        }
        ();
      } catch (error) {
        console.log(error);
      }
    }
  }
  ();

  if (j == 8) {
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
    gc();
  }
}
