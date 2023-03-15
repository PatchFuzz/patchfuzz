



print(() => eval(`
  class Foo {
    #x = 1;
    destructureX() {
      const { #x: x } = this;
      return x;
    }
  }
`), SyntaxError);
