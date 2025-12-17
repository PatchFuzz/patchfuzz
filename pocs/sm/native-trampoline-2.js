let arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.sort((x, y) => {
  enableGeckoProfilingWithSlowAssertions();
  readGeckoProfilingStack();
  return y - x;
});
print(arr.toString(), "8,7,6,5,4,3,2,1");
