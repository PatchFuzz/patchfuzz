function test(n) {
  
  
  
  let arr = [];
  for (let i = -n; i <= n; i++) {
    arr[i] = i;
  }
  let range = n * 2 + 1;

  for (let i = 0; i < 10 * range; i++) {
    let index = i % range - n;
    arr[index] = arr[index] + 1;
  }

  for (let i = -n * 2; i <= n * 2; i++) {
    let shouldContain = i >= -n && i <= n;
    print(i in arr, shouldContain);
    if (shouldContain) {
      print(arr[i], i + 10);
    }
  }

}


test(2);


test(10);
