




let arr = new Uint32Array(10);
for (let i = 0; i < 11; i++) {
  for (let j = 0; j < 1; j++) {
    i--;
    i++;
  }
  arr[i] = 0x1234;
}

print("Pass")