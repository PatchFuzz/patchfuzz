

var obj2 = {
    [Symbol.toPrimitive](hint) {
      if (hint == 'number') {
        return 10;
      }
      if (hint == 'string') {
        return 'hello';
      }
      return true;
    }
  };

  assert(+obj2 === 10);
  assert(`${obj2}` === "hello");
  assert(obj2 + '' === "true");
