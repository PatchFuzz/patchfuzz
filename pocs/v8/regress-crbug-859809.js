let xs = [];
const kSize = 200;
for (let i = 0; i < kSize; ++i) {
  xs.push(i);
}

let counter = 0;
xs.sort((a, b) => {
  if (counter++ % 10 == 0) {
    xs.shift();
    gc();
  }

  return a - b;
});
