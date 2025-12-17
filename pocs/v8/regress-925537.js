function print(expected, actual) {
  var delta = 0.00001;
  if (Math.abs(expected - actual) > delta) {
    print('Failure: Expected <' + actual + '> to be close to <' +
          expected + '>');
  }
}

print(1, Math.pow(NaN, 0));
var pinf = Number.POSITIVE_INFINITY, ninf = Number.NEGATIVE_INFINITY;
print( Math.PI / 4, Math.atan2(pinf, pinf));
print(-Math.PI / 4, Math.atan2(ninf, pinf));
print( 3 * Math.PI / 4, Math.atan2(pinf, ninf));
print(-3 * Math.PI / 4, Math.atan2(ninf, ninf));
