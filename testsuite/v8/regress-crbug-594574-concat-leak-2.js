





array = new Array(10);
array[0] = 0.1;

array[2] = 2.1;
array[3] = 3.1;

var copy = array.slice(0, array.length);


var proto = array.__proto__;


Object.defineProperty(
  proto, 1, {
    get() {
      
      array.length = 1;
      
      gc();
      return "value from proto";
    },
    set(new_value) { }
});

var concatted_array = Array.prototype.concat.call(array);
assertEquals(concatted_array[0], 0.1);
assertEquals(concatted_array[1], "value from proto");
assertEquals(concatted_array[2], undefined);
assertEquals(concatted_array[3], undefined);
