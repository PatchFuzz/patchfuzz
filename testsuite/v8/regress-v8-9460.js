



var arr = [0, 1];

assertThrows(
  () => Object.defineProperty(arr, 'length', {value: 1, configurable: true}),
  TypeError);
assertEquals(2, arr.length);

assertThrows(
  () => Object.defineProperty(arr, 'length', {value: 2, configurable: true}),
  TypeError);
assertEquals(2, arr.length);

assertThrows(
  () => Object.defineProperty(arr, 'length', {value: 3, configurable: true}),
  TypeError);
assertEquals(2, arr.length);
