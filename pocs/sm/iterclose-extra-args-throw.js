const iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        return { value: this.i++, done: false }
      },
      return(a, b, c, d) {
        print(a, undefined);
        print(b, undefined);
        print(c, undefined);
        print(d, undefined);
        return { value: "return", done: true };
      }
    };
  }
}

function closeIter(o) {
  for (var x of o) {
    if (x == 2) {
      throw "good";
    }
  }
}

function test() {
  with ({}) {}
  for (var i = 0; i < 100; i++) {
    var caught = "bad";
    try {
      closeIter(iterable)
    } catch (e) {
      caught = e;
    }
    print(caught, "good");
  }
}

with ({}) {}

test();


try {
  closeIter([1,2,3,4,5]);
} catch {}

test();
