try {
  eval("function Crash() { print(); continue;if (Crash) {  } }");
  Crash();
  print();
} catch (e) {
  print(e instanceof SyntaxError);
  print(/continue/.test(e.message));
}
