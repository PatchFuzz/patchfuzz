function test(val) {
  function func() {
    class Class extends func {
      static {
        super.m();
      }
      
      
      [this] = val;
      static 1;
    }
  }
  func();
}
print(test);
