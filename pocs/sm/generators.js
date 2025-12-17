const { value: frame } = (function iife1() {
  return (function* generator() {
    yield (function iife2() {
      return saveStack();
    }());
  }()).next();
}());





var lines = frame.toString().split("\n");
print(lines[0].startsWith("iife2@"), true);
print(lines[1].startsWith("generator@"), true);
print(lines[2].startsWith("iife1@"), true);
print(lines[3].startsWith("@"), true);
