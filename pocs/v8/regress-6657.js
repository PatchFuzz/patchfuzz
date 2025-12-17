(function TestArrayNonEmptySpecies() {
  class MyArray extends Array {
    constructor() { return [1, 2, 3]; }
  }
  var a = [5, 4];
  a.__proto__ = MyArray.prototype;
  var o = a.filter(() => true);
  print([5, 4, 3], o);
  print(3, o.length);
})();

(function TestArrayLeakingSpeciesInsertInCallback() {
  var my_array = [];
  class MyArray extends Array {
    constructor() { return my_array; }
  }
  var a = [5, 4];
  a.__proto__ = MyArray.prototype;
  var o = a.filter(() => (my_array[2] = 3, true));
  print([5, 4, 3], o);
  print(3, o.length);
})();

(function TestArrayLeakingSpeciesRemoveInCallback() {
  var my_array = [];
  class MyArray extends Array {
    constructor() { return my_array; }
  }
  var a = [5, 4, 3, 2, 1];
  a.__proto__ = MyArray.prototype;
  var o = a.filter(() => (my_array.length = 0, true));
  print([,,,,1], o);
  print(5, o.length);
})();
