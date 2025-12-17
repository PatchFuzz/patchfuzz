var counter = 0;
var val = {
  valueOf: function () {
    counter++;
    return "foo";
  }
};

var o = {a_foo:42};
print(42, o["a_" + val]);
print(1, counter);
