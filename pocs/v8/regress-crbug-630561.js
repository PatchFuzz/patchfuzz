var dict_elements = {};

for (var i= 0; i< 100; i++) {
  dict_elements[2147483648 + i] = i;
}

var keys = Object.keys(dict_elements);
