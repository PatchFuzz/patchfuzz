



let evil = {
  valueOf: function () {
    array.length = 1;
  }
};
let array = [1, 2, 3];
let newArray = array.slice(evil);
assertEquals(3, newArray.length);
