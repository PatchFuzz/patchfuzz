var f = (( {a: b} = {
    a() {
      return b;
    }
}) => b)()();



print(f, f());
