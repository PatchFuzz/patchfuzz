gczeal(12);

var length = 10000;
var array = new Array(length);
array.fill(null);


minorgc();

for (var i = 0; i < length; i++) {
  
  array[i] = {};
}

minorgc();

for (var i = length; i > 0; i--) {
  array[i - 1] = {};
}

minorgc();

for (var i = 0; i < length; i++) {
  array[Math.floor(Math.random() * length)] = {};
}

gc();
