let xs = [];
for (let i = 0; i < 205; ++i) {
  xs.push(i);
}
xs.sort((a, b) => {
  xs.shift();
  xs[xs.length] = -246;
  return a - b;
});
