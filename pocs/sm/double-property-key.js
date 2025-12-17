function testNearZero(n) {
  let arr = [];
  for (let i = -n; i <= n; i += 0.5) {
    arr[i] = i;
  }

  for (let i = 0; i < 10; i++) {
    for (let j = -n; j <= n; j += 0.5) {
      arr[j] = arr[j] + 1;
    }
  }

  for (let i = -n * 2; i <= n * 2; i += 0.5) {
    let shouldContain = i >= -n && i <= n;
    print(i in arr, shouldContain);
    if (shouldContain) {
      print(arr[i], i + 10);
    }
  }
}


testNearZero(1);


testNearZero(5);



function testNearUint32Max(n) {
  let UINT32_MAX = 0x7fff_ffff;
  let arr = [];
  for (let i = UINT32_MAX - n; i <= UINT32_MAX + n; i += 0.5) {
    arr[i] = i;
  }

  for (let i = 0; i < 10; i++) {
    for (let j = UINT32_MAX - n; j <= UINT32_MAX + n; j += 0.5) {
      arr[j] = arr[j] + 1;
    }
  }

  for (let i = UINT32_MAX - n * 2; i <= UINT32_MAX + n * 2; i += 0.5) {
    let shouldContain = i >= UINT32_MAX - n && i <= UINT32_MAX + n;
    print(i in arr, shouldContain);
    if (shouldContain) {
      print(arr[i], i + 10);
    }
  }
}


testNearUint32Max(1);


testNearUint32Max(5);
