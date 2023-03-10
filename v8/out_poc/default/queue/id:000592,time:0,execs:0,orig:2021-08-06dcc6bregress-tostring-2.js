




let long = '1000000000000000000000000000000000000000000000'.repeat(20) + '0';
let short = '100000000000000000000000000000000000000000000'.repeat(20) + '0';
BigInt(long).toLocaleString();
BigInt(short).toLocaleString();











function test(zeros, repeats) {
  let chunk = '1' + '0'.repeat(zeros);
  let input = chunk.repeat(repeats);
  print(input, BigInt(input).toString(),
               `bug for ${zeros} zeros repeated ${repeats} times`);
}
for (let zeros = 1; zeros < 50; zeros++) {
  for (let repeats = 64; repeats > 0; repeats -= 20) {
    test(zeros, repeats);
  }
}
test(96, 11);  
