

const { value: frame } = (function iife1() {
  return (function* generator() {
    yield (function iife2() {
      return saveStack();
    }());
  }()).next();
}());





var lines = frame.toString().split("\n");
assertEq(lines[0].startsWith("iife2@"), true);
assertEq(lines[1].startsWith("generator@"), true);
assertEq(lines[2].startsWith("iife1@"), true);
assertEq(lines[3].startsWith("@"), true);
