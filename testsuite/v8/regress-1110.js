




























try {
  eval("function Crash() { assertUnreachable(); continue;if (Crash) {  } }");
  Crash();
  assertUnreachable();
} catch (e) {
  assertTrue(e instanceof SyntaxError);
  assertTrue(/continue/.test(e.message));
}
