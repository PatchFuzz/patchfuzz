enableLastWarning();
eval(`
  function blah() {
    return 0;
    if (true) {}  400n == "abc";
  }
`);
print(getLastWarning().message, "unreachable code after return statement");
blah();
