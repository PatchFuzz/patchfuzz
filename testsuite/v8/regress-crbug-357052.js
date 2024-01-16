



function f() {
  var str = "";
  for (var i = 0; i < 30; i++) {
    str += "abcdefgh12345678" + str;
  }
  return str;
}
assertThrows(f);
