var array = [ [0] ];
var obj = { prop : "" };
var i = 0;
var count = 0;

(function () {
      for (array[0][i] in obj)
          count++;
})();

assert(array[0][0] == "prop");
assert(count == 1);

