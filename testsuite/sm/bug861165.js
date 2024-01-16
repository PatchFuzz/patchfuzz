














function test1(index, a) {
  if (index < 0)
    index = -index
  return index in a;
}
assertEq(test1(1, [1,2]), true);

function test2(a) {
  return 0 in a;
}
assertEq(test2([1,2]), true);

function test3(index, a) {
  return index in a;
}

var arr3 = [];
arr3["-1073741828"] = 17;
assertEq(test3(-1073741828, arr3), true);

function test4(a) {
  return -1073741828 in a;
}
assertEq(test4(arr3), true);


function test5(index, a) {
  if (index < 0)
    index = -index
  return index in a;
}
var arr5 = [];
arr5[0] = 1
arr5[1] = 1
arr5[2] = 1
arr5[4] = 1
assertEq(test5(1, arr5), true);
assertEq(test5(3, arr5), false);

function test7a(a) {
  return 3 in a;
}
function test7b(a) {
  return 4 in a;
}
assertEq(test7a(arr5), false);
assertEq(test7b(arr5), true);

function test8(index, a) {
  return index in a;
}
arr5["-1073741828"] = 17;
assertEq(test8(-1073741828, arr5), true);
assertEq(test8(3, arr5), false);
assertEq(test8(0, arr5), true);

function test9a(a) {
  return 0 in a;
}
function test9b(a) {
  return 3 in a;
}
function test9c(a) {
  return -1073741828 in a;
}
assertEq(test9a(arr5), true);
assertEq(test9b(arr5), false);
assertEq(test9c(arr5), true);
