













try {
  eval(`var errorMessage = "toStringThrows"

  var toStringThrows = {
    "foo
  }

  try {
    var obj = {};
    obj[toStringThrows] = 3;
    assert(false);
  } catch (e) {
    assert(e.message == errorMessage);
  }
  `);
  assert(false);
} catch (e) {
  assert(e instanceof SyntaxError);
}

