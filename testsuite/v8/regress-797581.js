










function TryToLoadModule(filename, expect_error, token) {
  let caught_error;

  function SetError(e) {
    caught_error = e;
  }

  import(filename).catch(SetError);
  %PerformMicrotaskCheckpoint();

  if (expect_error) {
    assertTrue(caught_error instanceof SyntaxError);
    assertEquals("Unexpected token '" + token + "'", caught_error.message);
  } else {
    assertEquals(undefined, caught_error);
  }
}

TryToLoadModule("modules-skip-regress-797581-1.js", true, ")");
TryToLoadModule("modules-skip-regress-797581-2.js", true, ")");
TryToLoadModule("modules-skip-regress-797581-3.js", true, "...");
TryToLoadModule("modules-skip-regress-797581-4.js", true, ",");
TryToLoadModule("modules-skip-regress-797581-5.js", false);
