



let cnt = 0;
const re = /x/y;
const replacement = {
  toString: () => {
    cnt++;
    if (cnt == 2) {
      re.lastIndex = { valueOf: () => { re.x = -1073741825; return 7; }};
    }
    return 'y$';
  }
};

const str = re[Symbol.replace]("x", replacement);
assertEquals(str, "y$");
