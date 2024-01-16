






























function CheckSequence(builtin, callback) {
  var array = [1,2,3];
  var callback_count = 0;
  var callback_wrapper = function() {
    callback_count++;
    return callback()
  }

  
  Object.defineProperty(array, '1', {
    get: function () { delete array[1]; },
    configurable: true
  });

  assertTrue(array.hasOwnProperty('1'));
  builtin.apply(array, [callback_wrapper, 'argument']);
  assertFalse(array.hasOwnProperty('1'));
  assertEquals(3, callback_count);
}

CheckSequence(Array.prototype.every,       function() { return true; });
CheckSequence(Array.prototype.filter,      function() { return true; });
CheckSequence(Array.prototype.forEach,     function() { return 0; });
CheckSequence(Array.prototype.map,         function() { return 0; });
CheckSequence(Array.prototype.reduce,      function() { return 0; });
CheckSequence(Array.prototype.reduceRight, function() { return 0; });
CheckSequence(Array.prototype.some,        function() { return false; });
