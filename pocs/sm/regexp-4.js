function test() {  
  var s = "foobar";
  var re = /abc.+/;
  var count = 0;
  for (var i = 0; i < 200; i++) {
    re.test(s);
    if (i === 150) {
      
      RegExp.prototype.exec = function() {
        count++;
        return null;
      };
    }
  }
  print(count, 49);
}
test();
