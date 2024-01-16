





























function Item(val) {
  this.value = val;
}


var size = 23;
var array1 = new Array(size);


function myToString() {
  array1.splice(0, 1);
  return this.value.toString();
}


function test() {
  for (var i = 0; i < size; i++) {
    array1[i] = new Item(i);
    array1[i].toString = myToString;
  }
  array1.sort();
}


test();
