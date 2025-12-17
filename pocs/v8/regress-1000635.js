function add(a, b) {
  throw new Error();
}
for (let i = 0; i < 100; ++i) {
  try {
    add(1, 2);
  } catch (e) {
  }
}
