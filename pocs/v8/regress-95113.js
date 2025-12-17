function get_double_array() {
  var a = new Array(100000);
  var i = 0;
  while (!%HasDoubleElements(a)) {
    a[i] = i + 0.1;
    i += 1;
  }
  print(%HasDoubleElements(a));
  a.length = 1;
  a[0] = 1.5;
  a.length = 2;
  a[1] = 2.5;
  print(a[0], 1.5);
  print(a[1], 2.5);
  print(%HasDoubleElements(a));
  return a;
}

var a = get_double_array();
