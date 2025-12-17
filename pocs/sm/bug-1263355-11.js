function print(expected, actual, message = "") { }
function g3(h = () => arguments) {
  function arguments() { }
  print(arguments, h());
}
g3();
