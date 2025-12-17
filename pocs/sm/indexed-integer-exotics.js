function print(code) {
  try {
    eval(code);
  } catch (e) {
    return;
  }
  print(true, false);
}

Object.prototype["10"] = "unreachable";
Object.prototype["7"] = "unreachable";
Object.prototype["-1"] = "unreachable";
Object.prototype["-0"] = "unreachable";
Object.prototype["4294967295"] = "unreachable";

var array = new Int32Array(10);

function check() {
  for (var i = 0; i < 4; i++) {
    print(undefined, array["-1"]);
    print(undefined, array["-0"]);
    print(undefined, array["10"]);
    print(undefined, array["4294967295"]);
  }
  print("unreachable", array.__proto__["-1"]);
  print("unreachable", array.__proto__["-0"]);
  print("unreachable", array.__proto__["10"]);
  print("unreachable", array.__proto__["4294967295"]);
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

print(undefined, Object.getOwnPropertyDescriptor(array, "-1"));
print(undefined, Object.getOwnPropertyDescriptor(array, "-0"));
print(undefined, Object.getOwnPropertyDescriptor(array, "10"));
print(undefined, Object.getOwnPropertyDescriptor(array, "4294967295"));
print(10, Object.keys(array).length);

check();

function f() { return array["-1"]; }

for (var i = 0; i < 3; i++) {
  print(undefined, f());
}
setJitCompilerOption("baseline.warmup.trigger", 0);
setJitCompilerOption("ion.warmup.trigger", 0);
print(undefined, f());



print('Object.defineProperty(new Int32Array(100), -1, {value: 1})');

print('Object.defineProperty(new Int32Array(100), "-0", {value: 1})');
print('Object.defineProperty(new Int32Array(100), -10, {value: 1})');
print('Object.defineProperty(new Int32Array(), 4294967295, {value: 1})');

check();
