





var s = "\u1234-------";
for (var i = 0; i < 17; i++) {
  s += s;
}
s.replace(/[\u1234]/g, "");
