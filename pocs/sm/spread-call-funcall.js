;

function check(f) {
  print(f.call(...[null], 1, 2, 3), [1, 2, 3]);
  print(f.call(...[null], 1, ...[2, 3], 4, ...[5, 6]), [1, 2, 3, 4, 5, 6]);
  print(f.call(...[null, 1], ...[2, 3], 4, ...[5, 6]), [1, 2, 3, 4, 5, 6]);
  print(f.call(...[null, 1, ...[2, 3], 4, ...[5, 6]]), [1, 2, 3, 4, 5, 6]);
}

check(function(...x) { return x; });
check((...x) => x);
