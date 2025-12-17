function checkNotGray(value) {
  
  let test = {};
  test.property = value;
}



gczeal(0);

let key = {};
let value = {};

let map = new WeakMap();
map.set(key, value);

let gray = grayRoot();
gray.key = key;

addMarkObservers([map, key, value]);

gray = null;
key = null;
value = null;

gc();

let marks = getMarks();
print(marks[0], "black");
print(marks[1], "gray");
print(marks[2], "gray");



key = nondeterministicGetWeakMapKeys(map)[0];
checkNotGray(key);



value = map.get(key);
checkNotGray(value);
