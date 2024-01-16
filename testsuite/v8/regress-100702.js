





























String.prototype.isThatMe = function () {
  assertFalse(this === str);
};

var str = "abc";
str.isThatMe();
str.isThatMe.call(str);

var arr = [1];
arr.forEach("".isThatMe, str);
arr.filter("".isThatMe, str);
arr.some("".isThatMe, str);
arr.every("".isThatMe, str);
arr.map("".isThatMe, str);
