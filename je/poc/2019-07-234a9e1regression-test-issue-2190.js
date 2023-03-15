













try {
  /(?:(?=x)){10000}xyz/.exec('xyz');
  print(false);
} catch (e) {
  print(e instanceof RangeError);
}
