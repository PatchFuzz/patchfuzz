





for (let i = 0; i < 5000; i++) {
  try {
    [].reduce(function() {});
  } catch (x) {
  }
}
