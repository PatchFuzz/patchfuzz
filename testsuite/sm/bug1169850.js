

var caught = false;
try {
  eval("export default 1;");
} catch (e) {
  caught = true;
}
assertEq(caught, true);
