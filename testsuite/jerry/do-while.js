













var a = 0;

do a++
while (false)

do { a++ } while (false)

try {
  eval("do a++ while (false)");
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}
