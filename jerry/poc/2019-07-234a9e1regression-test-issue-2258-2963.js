













try {
  JSON.stringify(10, Array);
  print(false);
} catch (e) {
  print(e instanceof RangeError);
}
