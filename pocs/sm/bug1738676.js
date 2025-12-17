function verify(n) {
  with ({}) {}
  print(n, -0);
}

function main() {
  let x;
  let arr = [];

  let i = 0;
  do {
    x = (256 - i) * 0;
    arr[x] = 0;
    i++
  } while (i < 512);
  verify(x);
}

main();
