function test() {
  try {
    test();
  } catch(e) {
    /(\2)(a)/.test("");
  }
}

test();
