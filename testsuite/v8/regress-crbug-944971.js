



let re = /x/y;
let cnt = 0;
let str = re[Symbol.replace]("x", {
  toString: () => {
    cnt++;
    if (cnt == 2) {
      re.lastIndex = {valueOf: () => {
        re.x = 42;
        return 0;
      }};
    }
    return 'y$';
  }
});
assertEquals("y$", str);
