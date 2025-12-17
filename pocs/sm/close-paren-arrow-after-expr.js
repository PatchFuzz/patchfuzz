var caught = false;
try {
  eval("1\n)=>");
} catch (e) {
  print(e instanceof SyntaxError, true);
  caught = true;
}
print(caught, true);
