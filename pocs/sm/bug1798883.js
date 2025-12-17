var s = "a".repeat(32) + String.fromCharCode(0xFB2C);

oomTest(function() {
  
  s.normalize();
  s.normalize();
});
