function makeProxy(n) {
  return new Proxy({}, {
    get() { return n; }
  })
}

var arr = [];
for (var i = 0; i < 100; i++) {
  arr.push(makeProxy(i));
}



for (var i = 0; i < 500; i++) {
  var idx = i % arr.length;
  print(arr[idx].x, idx);
}
