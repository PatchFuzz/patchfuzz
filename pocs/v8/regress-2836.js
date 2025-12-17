function f() {
  var end = 1073741823;  
  var start = end - 100000;  
  for (var i = start; i <= end; ++i) {
    print(i >= start);  
  }
}

f();
