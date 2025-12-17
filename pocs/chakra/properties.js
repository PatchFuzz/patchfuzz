if (typeof (WScript) != "undefined") {
  print("..\\UnitTestFramework\\UnitTestFramework.js", "self");
}

var tests = {
  test01: {
    name: "RegExp.options property",
    body: function () {
      var re = /x/i;
      var desc = Object.getOwnPropertyDescriptor(re, "options");
      var expected = helpers.isCompatVersion9 ? 
        {enumerable: true, configurable: true, writable: true, value: "i"} :
        {enumerable: false, configurable: false, writable: false, value: "i"};
      print(expected, desc);
    }
  },
};

testRunner.run(tests);
