var line, column;
try {
  eval(`

  /aaa(/;
123456789;
`);
} catch (e) {
  line = e.lineNumber;
  column = e.columnNumber;
}

print(line, 3);
print(column, 7);
