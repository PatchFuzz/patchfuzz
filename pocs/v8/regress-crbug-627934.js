var x = "1".repeat(32 * 1024 * 1024);
for (var z = x;;) {
  try {
    z += {toString: function() { return x; }};
  } catch (e) {
    break;
  }
}
