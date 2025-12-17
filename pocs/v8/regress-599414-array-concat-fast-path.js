var largeArray = 'x'.repeat(999).split('');
var a = largeArray;

print(() => {
  for (;;) {
    a = a.concat(a, a, a, a, a);
  }}, RangeError);
