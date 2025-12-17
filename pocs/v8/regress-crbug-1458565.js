class C1 {
  constructor() {
    const o = {
      boom() {
        class C2 extends super.constructor {
          static boom_s = 42();
        };
        return C2;
      },
    };
    o.boom();

    
    function F17() {
      o;
    }
  }
}
print(() => { new C1(); }, TypeError);
