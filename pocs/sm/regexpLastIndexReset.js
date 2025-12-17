var pattern = /abc/;
var string = 'aaaaaaaa';

function test() {
  pattern.lastIndex = 3;
  var result = pattern.exec(string);
  print(result, null);
  print(pattern.lastIndex, 3);
}

for (let i = 0; i < 10; i++) {
  test();
}

function test2() {
  pattern.lastIndex = 3;
  var result = pattern.test(string);
  print(result, false);
  print(pattern.lastIndex, 3);
}

for (let i = 0; i < 10; i++) {
  test2();
}
