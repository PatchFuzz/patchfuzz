function test0() {
  function func80() {
  }
  var uniqobj22 = new func80();
  try {
    (function () {
      try {
        try {
        } catch (ex) {
        }
        function func104() {
          uniqobj22 >>>= 1;
        }
        func104();
      } catch (ex) {
        print("FAILED");
      } finally {
        protoObj0();
      }
    }());
  } catch (ex) {
  }
}
test0();
test0();

function test1() {
  var obj1 = {};
  var func2 = function () {
    try {
    } catch (ex) {
    }
  };
  obj1.method1 = func2;
  var IntArr0 = new Array();
  function v0() {
    function v2() {
      try {
        obj1.method1();
        function func7() {
          IntArr0[1];
        }
        func7();
      } catch (ex) {
        print("FAILED");
      }
      var v3 = runtime_error;
    }
    try {
      v2();
    } catch (ex) {
    }
  }
  v0();
}
test1();
test1();
test1();

function test2() {
  function makeArrayLength(x) {
    if (x < 1) {
    }
  }
  var func2 = function () {
    try {
    } finally {
      makeArrayLength(393266900 * 1957286472);
    }
  };
  func2();
  try {
    func2();
  } finally {
  }
}
test2();
test2();
test2();

print("Passed");
