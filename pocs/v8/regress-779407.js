var s = '\u1234-------';
for (var i = 0; i < 17; i++) {
  try {
    s += s;
    s += s;
  } catch (e) {
  }
}
s.replace(/a/g);
