

var caught = false;
try {
  eval("export { a } from 'b';");
} catch (e) {
  caught = true;
}
assertEq(caught, true);
