(() => {
  let returnCalled = false;

  function foo() {
    ({}).__proto__.return = () => {
      returnCalled = true;
      return { value: 3, done: true };
    };
    return 2;
  }

  print(returnCalled, false);
  let [a,[b=foo()]] = [1,[],3];
  print(returnCalled, true);
  print(a, 1);
  print(b, 2);
})();
