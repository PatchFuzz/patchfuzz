













let objects = [];

for (let i = 0; i < 100; i++) {

  for (let x = 0; x < i; x++) {
    if (i % 2 == 0) {
      objects.push({ i: 35 });
    } else {
      objects.push({ i: 35, "a":42 });
    }
  }

  let arr = Array();
  objects.push(arr);
  for (let i = 0; i < 100; i++) {
    arr[i] = 1.5;
  }

  arr[20] = -0.0;
  arr[23] = 0;

  assertEquals(20, arr.indexOf(0));
}
