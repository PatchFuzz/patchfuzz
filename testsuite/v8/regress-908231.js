



assertThrows(`
    class C {
      get [(function() { function lazy() { Syntax Error } })()]() {}
    }`, SyntaxError)
