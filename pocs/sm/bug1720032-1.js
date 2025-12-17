;
function main() {
  class Base {}

  class Derived extends Base {
    constructor() {
      super();

      let v = 0xffff;

      try {
        
        v &= 0xff;

        
        return 0;
      } catch {}

      print(v, 255);
    }
  }

  for (let i = 0; i < 15; i++) {
    print(() => new Derived(), TypeError);
  }
}
main();
main();
