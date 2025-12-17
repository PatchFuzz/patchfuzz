(() => {
  let nextCalled = 0;
  ([])[Symbol.iterator]().__proto__.next = () => {
    nextCalled++;
    return {value: nextCalled, done: false};
  };

  print(nextCalled, 0);
  let [a,b] = [1,2,3];
  print(nextCalled, 2);
  print(a, 1);
  print(b, 2);
})();
