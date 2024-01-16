













try {
  var a = Function.prototype.bind({0:0},30000000000);
  a();
}
catch (e) {
  assert(false);
}
