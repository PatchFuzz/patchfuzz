const magic0 = 2396;
const magic1 = 1972;


const xs = [];
for (let j = 0; j < magic0; ++j) {
  xs[j] = [j + 0.1];
}


let cmp_calls = 0;
xs.sort((lhs, rhs) => {
  lhs = lhs || [0];
  rhs = rhs || [0];
  if (cmp_calls++ == magic1) xs.length = 1;
  return lhs[0] - rhs[0];
});



