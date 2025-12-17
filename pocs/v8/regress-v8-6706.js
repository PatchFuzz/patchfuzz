const str = "a-b-c";

function test(re) {
  print(["a", "b", "c"], re[Symbol.split](str));
}

!function() {
  const re = /-/y;
  re.lastIndex = 1;
  test(re);
}();

!function() {
  const re = /-/y;
  re.lastIndex = 3;
  test(re);
}();

!function() {
  const re = /-/y;
  re.lastIndex = -1;
  test(re);
}();

!function() {
  const re = /-/y;
  test(re);
}();

!function() {
  const re = /-/g;
  test(re);
}();
