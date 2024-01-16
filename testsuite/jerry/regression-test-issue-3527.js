













function assertThrows(src) {
  try {
    eval(src);
    assert(false);
  } catch (e) {
    assert(e instanceof SyntaxError);
  }
}

assertThrows(`function $({
  $: {
      [$.$]
  }
}) {}`);

assertThrows(`function $({
  $: {
      [$]
  }
}) {}`);
