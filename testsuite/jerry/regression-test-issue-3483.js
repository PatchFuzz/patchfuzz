













function assertThrows(src) {
  try {
    eval(src);
    assert(false);
  } catch (e) {
    assert(e instanceof SyntaxError);
  }
}

assertThrows('Setting `o.bar` to');
assertThrows('Setting `o.bar`; Setting `o.bar` to');
assertThrows('Setting `o.bar`; Setting `o.bar`; Setting `o.bar` to');
