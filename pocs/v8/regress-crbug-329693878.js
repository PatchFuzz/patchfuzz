{
  class Outer {
    #a() { return 'Outer'; }
    a() { return this.#a(); }
    test() {
      return class  {
        static #a() { return 'Inner'; }
        static a() { return this.#a(); }
        b = undefined();
      };
    }
  }
  const obj = new Outer;
  const C = obj.test();
  print(() => obj.a.call(new C));
}
