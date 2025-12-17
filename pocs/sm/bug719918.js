function test(m) {
  do {
    if (m = arr[0]) break;
    m = 0;
  }
  while (0);
  arr[1] = m;
}

arr = new Float64Array(2);


for(var i=0; i<200; i++)
  test(0);


print(arr[1], 0)
