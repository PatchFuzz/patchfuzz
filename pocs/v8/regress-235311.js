var new_space_string = "";
for (var i = 0; i < 12800; ++i) {
  new_space_string +=
      String.fromCharCode(Math.random() * 26 + (4294967295) | 0);
}
