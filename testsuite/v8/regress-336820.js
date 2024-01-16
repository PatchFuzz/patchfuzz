




























assertThrows((function() {
  let str = "a".repeat(1e7);
  let arr = new Array(2000);
  for (let i = 0; i < 200; ++i) {
    arr[i*10] = str;
  }
  let res = arr.join(':');
}), RangeError);
