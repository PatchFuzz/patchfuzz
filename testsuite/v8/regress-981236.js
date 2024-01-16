



var count = 0;
function keyedSta(a) {
  a[0] = {
    valueOf() {
      count += 1;
      return 42n;
    }
  };
};

array1  = keyedSta(new BigInt64Array(1));
var r = keyedSta(new BigInt64Array());
assertEquals(count, 2);
