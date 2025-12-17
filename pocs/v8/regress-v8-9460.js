var arr = [0, 1];

print(
  () => Object.defineProperty(arr, 'length', {value: 1, configurable: true}),
  TypeError);
print(2, arr.length);

print(
  () => Object.defineProperty(arr, 'length', {value: 2, configurable: true}),
  TypeError);
print(2, arr.length);

print(
  () => Object.defineProperty(arr, 'length', {value: 3, configurable: true}),
  TypeError);
print(2, arr.length);
