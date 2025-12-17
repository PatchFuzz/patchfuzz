function v11() {
  h = 4294967296 >>> 0 == 0 ? 1 : 4294967296;
}
v11();
v11();
v11();
if (h == 1) {
  print("PASSED");
}
else {
  print("FAILED");
}
