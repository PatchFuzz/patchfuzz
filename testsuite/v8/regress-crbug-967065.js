






function ThrowingSort() {
  const __v_3 = new Array(2147549152);
  Object.defineProperty(__v_3, 0, {
    get: () => { throw new Error("Do not actually sort!"); }
  });
  __v_3.sort();
}

assertThrows(() => ThrowingSort());
