function outer() {
  function* generator() {
    let arrow = () => {
      print(expectedReceiver, this);
      print(42, arguments[0]);
    };
    arrow();
  }
  generator.call(this, 42).next();
}
let expectedReceiver = {};
outer.call(expectedReceiver);
