function testAdvanceStringIndex(lastIndex, expectedLastIndex) {
  let exec_count = 0;
  let last_last_index = -1;

  let fake_re = {
    exec: () => { return (exec_count++ == 0) ? [""] : null },
    get lastIndex() { return lastIndex; },
    set lastIndex(value) { last_last_index = value },
    get global() { return true; },
    get flags() { return "g"; }
  };

  print([""], RegExp.prototype[Symbol.match].call(fake_re, "abc"));
  print(expectedLastIndex, last_last_index);
}

testAdvanceStringIndex(new Number(42), 43);  
testAdvanceStringIndex(%AllocateHeapNumber(), 1);  
testAdvanceStringIndex(4294967295, 4294967296);  
