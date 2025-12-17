function main() {
  class Base {}

  class Derived extends Base {
    constructor() {
      let v = 0xffff;

      try {
        
        v &= 0xff;

        
        this;
      } catch {}

      print(v, 255);

      super();
    }
  }

  for (let i = 0; i < 15; i++) {
    new Derived();
  }
}
main();
main();
