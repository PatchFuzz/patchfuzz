function testcase() {
  return (function (a, b, c) {
      delete arguments[0];
      Object.defineProperty(arguments, "0", {
              value: 10,
              writable: false,
              enumerable: false,
              configurable: false
            });
      print(10, arguments[0]);
    }(0, 1, 2));
}

testcase();
