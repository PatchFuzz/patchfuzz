let bTrue = true;
let bFalse = false;

function testMonomorphic() {
  var obj = { true: 1, false: 2 };
  for (var i = 0; i < 40; i++) {
    obj[bTrue] = 1 + obj[bTrue];
    obj[bFalse] = 2 + obj[bFalse];
    var bool = (i & 1) === 1;
    obj[bool] = 3 + obj[bool];
  }
  print(obj.true, 101);
  print(obj.false, 142);
}
testMonomorphic();

function testMegamorphic() {
  var arr = [];
  for (var i = 0; i < 50; i++) {
    arr.push({ true: i, ["x" + i]: i * 2, false: i * 3 });
  }
  var trues = 0;
  var falses = 0;
  var mixed = 0;
  for (var i = 0; i < 100; i++) {
    var obj = arr[i % arr.length];
    trues += obj[bTrue];
    falses += obj[bFalse];
    var bool = (i & 1) === 1;
    mixed += obj[bool];
    obj[bool] += 1;
  }
  print(trues, 2475);
  print(falses, 7375);
  print(mixed, 4900);
}
testMegamorphic();
