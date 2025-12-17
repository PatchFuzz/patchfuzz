function bug673705() {
  var x;
  try {
    try {
    } catch (e) {
    }
  } finally {
  }
  print(x);
  return x;
}
print(bug673705(), undefined);
