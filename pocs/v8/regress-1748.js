var str = Array(10000).join("X");
str.replace(/^|X/g, function(m, i, s) {
  if (i > 0) print("X", m, "at position 0x" + i.toString(16));
});
