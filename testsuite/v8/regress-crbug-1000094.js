





var f = (( {a: b} = {
    a() {
      return b;
    }
}) => b)()();



assertEquals(f, f());
