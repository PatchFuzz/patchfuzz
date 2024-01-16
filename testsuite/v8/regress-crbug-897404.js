



function TestError() {}

const a = new Array(2**32 - 1);


a[0] = {
  toString() { throw new TestError(); }
};



assertThrows(() => a.join(), TestError);
