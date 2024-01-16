


























(function() {
  function testOneSize(current_size) {
    var eval_string = 'obj = {';
    for (var current = 0; current <= current_size; ++current) {
      eval_string += 'k' + current + ':' + current + ','
    }
    eval_string += '};';
    eval(eval_string);
    for (var i = 0; i <= current_size; i++) {
      assertEquals(i, obj['k'+i]);
    }
    var current_number = 0;
    for (var x in obj) {
      assertEquals(current_number, obj[x]);
      current_number++;
    }
  }

  testOneSize(127);
  testOneSize(128);
  testOneSize(129);

  testOneSize(255);
  testOneSize(256);
  testOneSize(257);

  testOneSize(511);
  testOneSize(512);
  testOneSize(513);

  testOneSize(1023);
  testOneSize(1024);
  testOneSize(1025);

  testOneSize(2047);
  testOneSize(2048);
  testOneSize(2049);
}())
