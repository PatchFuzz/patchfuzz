













var a = 0;

do a++
while (false)

do { a++ } while (false)

try {
  eval("do a++ while (false)");
  print(false);
} catch (e) {
  print(e instanceof SyntaxError);
}
