var count = 0;
var scope = {
  get args() {
    count++;
    return "";
  }
};

with (scope) {
  [].push(...args);
}


print(count, 1);
