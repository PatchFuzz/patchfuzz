try {
  new Set(...[1]);
} catch (e) {
  print(e.message, "1 is not iterable");
}
