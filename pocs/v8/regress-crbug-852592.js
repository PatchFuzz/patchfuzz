const kArraySize = 1024;

let array = [];
for (let i = 1; i < kArraySize; ++i) {
  array[i] = i + 0.1;
}

print(array.length, kArraySize);

let executed = false;
compareFn = _ => {
  if (!executed) {
    executed = true;

    array.length = 1; 
    array.length = 0; 
    array.length = kArraySize; 
  }
}

array.sort(compareFn);
