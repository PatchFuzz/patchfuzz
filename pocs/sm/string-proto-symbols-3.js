function test() {  
  var s = "foobar";
  var count = 0;
  for (var i = 0; i < 200; i++) {
    s.replace("abc", "").replace("def", "");
    if (i === 150) {
      
      Object.prototype[Symbol.replace] = function() {
        count++;
        return s;
      };
    }
  }
  print(count, 98);
}
test();
