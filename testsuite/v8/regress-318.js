




























function test(value) {
  if (typeof(value) == 'boolean') value = value + '';
  if (typeof(value) == 'number') value = value + '';
}

assertDoesNotThrow('test(0)');
