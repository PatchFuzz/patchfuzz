













eval = class extends SyntaxError {
  constructor() {
      super()
  }
}

try {
  eval()
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}
