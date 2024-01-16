



function test() {
  const MAX_DENSE_ELEMENTS_ALLOCATION = (1 << 28) - 1;
  const VALUES_PER_HEADER = 2;
  const MAX_DENSE_ELEMENTS_COUNT = MAX_DENSE_ELEMENTS_ALLOCATION - VALUES_PER_HEADER;
  const SPARSE_DENSITY_RATIO = 8;
  const MIN_DENSE = MAX_DENSE_ELEMENTS_COUNT / SPARSE_DENSITY_RATIO;
  const MARGIN = 16;

  let a = [];
  
  
  for (let i = 0; i < MIN_DENSE; i++)
    a[i] = i;

  
  

  
  for (let i = MAX_DENSE_ELEMENTS_COUNT - MARGIN; i < MAX_DENSE_ELEMENTS_COUNT + MARGIN; i++)
    a[i] = i;

  
  assertEq(a.length, MAX_DENSE_ELEMENTS_COUNT + MARGIN);
  assertEq(a[a.length - 1], MAX_DENSE_ELEMENTS_COUNT + MARGIN - 1);

  
  assertEq(a[MAX_DENSE_ELEMENTS_COUNT - 1], MAX_DENSE_ELEMENTS_COUNT - 1);
  assertEq(a[MAX_DENSE_ELEMENTS_COUNT], MAX_DENSE_ELEMENTS_COUNT);
  assertEq(a[MAX_DENSE_ELEMENTS_COUNT + 1], MAX_DENSE_ELEMENTS_COUNT + 1);
}

var config = getBuildConfiguration();

if (!config.debug) {
  test();
}
