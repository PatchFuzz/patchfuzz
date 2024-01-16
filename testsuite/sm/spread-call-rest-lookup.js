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


assertEq(count, 1);
