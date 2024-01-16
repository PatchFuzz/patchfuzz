

var line, column;
try {
  eval(`

  /aaa(/;
012345678;
`);
} catch (e) {
  line = e.lineNumber;
  column = e.columnNumber;
}

assertEq(line, 3);
assertEq(column, 6);
