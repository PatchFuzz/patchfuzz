





arr0 = [];

var obj = {};

Array.prototype[12] = 10;
arr0 = [];
Array.prototype[0] = 153;

for (var elem in arr0) {
  obj.length = {
    toString: function () {
    }
  };
}

function baz() {
  obj.length, arr0.length;
}

var arr = [{}, [], {}];
for (var i in arr) {
  baz();
  for (var j = 0; j < 100000; j++) {
  }
}
