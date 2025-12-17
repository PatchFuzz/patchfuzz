function test(value) {
  if (typeof(value) == 'boolean') value = value + '';
  if (typeof(value) == 'number') value = value + '';
}

print('test(0)');
