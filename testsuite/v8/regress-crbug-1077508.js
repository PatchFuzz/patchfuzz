



const array = [, , , 0, 1, 2];
const comparefn = () => {
  Array.prototype.__defineSetter__("0", function () {});
  Array.prototype.__defineSetter__("1", function () {});
  Array.prototype.__defineSetter__("2", function () {});
};

array.sort(comparefn);

assertArrayEquals([, , , , , , ], array);
