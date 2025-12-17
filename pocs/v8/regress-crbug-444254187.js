class Outer {
  static [
    class Inner {
        static accessor [
          (() => {
            return "inner_prop";
          })()
        ] = 123;

        static getName() { return "outer_prop"; }

    }
  ]
  = 99;
}
