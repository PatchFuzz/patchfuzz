


























function assertThrows(code) {
  try {
    eval(code);
  } catch (e) {
    return;
  }
  assertEq(true, false);
}

Object.prototype["10"] = "unreachable";
Object.prototype["7"] = "unreachable";
Object.prototype["-1"] = "unreachable";
Object.prototype["-0"] = "unreachable";
Object.prototype["4294967295"] = "unreachable";

var array = new Int32Array(10);

function check() {
  for (var i = 0; i < 4; i++) {
    assertEq(undefined, array["-1"]);
    assertEq(undefined, array["-0"]);
    assertEq(undefined, array["10"]);
    assertEq(undefined, array["4294967295"]);
  }
  assertEq("unreachable", array.__proto__["-1"]);
  assertEq("unreachable", array.__proto__["-0"]);
  assertEq("unreachable", array.__proto__["10"]);
  assertEq("unreachable", array.__proto__["4294967295"]);
}

check();

array["-1"] = "unreachable";
array["-0"] = "unreachable";
array["10"] = "unreachable";
array["4294967295"] = "unreachable";

check();

delete array["-0"];
delete array["-1"];
delete array["10"];
delete array["4294967295"];

assertEq(undefined, Object.getOwnPropertyDescriptor(array, "-1"));
assertEq(undefined, Object.getOwnPropertyDescriptor(array, "-0"));
assertEq(undefined, Object.getOwnPropertyDescriptor(array, "10"));
assertEq(undefined, Object.getOwnPropertyDescriptor(array, "4294967295"));
assertEq(10, Object.keys(array).length);

check();

function f() { return array["-1"]; }

for (var i = 0; i < 3; i++) {
  assertEq(undefined, f());
}
setJitCompilerOption("baseline.warmup.trigger", 0);
setJitCompilerOption("ion.warmup.trigger", 0);
assertEq(undefined, f());









check();
