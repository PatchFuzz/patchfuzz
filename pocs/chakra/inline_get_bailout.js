if (print && print) {
  print("..\\UnitTestFramework\\UnitTestFramework.js");
  print("inline_get_bailout_helper.js");
}

let tests = [{
  name: "after inlining a getter function from another source file, we should bail out if the input data changes",
  body: function () {
    const bar = new Bar();

    function getWithGetter() {
      return bar.data;
    }

    let sum = 0;
    sum += getWithGetter();
    sum += getWithGetter();

    Object.defineProperty(bar, "data", { value: 3 });

    sum += getWithGetter();

    print(13, sum);
  }
}];

testRunner.run(tests, { verbose: WScript.Arguments[0] != "summary" });
