function getRoundValue(n) {
  if (!(n == 0)) {
    return n.toFixed();
  }
}
WScript.Echo = function (n) {
  print(formatOutput(n.toString()));
};
function formatOutput(n) {
  return n.replace(/[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/g, function () {
    return getRoundValue(parseFloat());
  });
}
print(0);
print(0);