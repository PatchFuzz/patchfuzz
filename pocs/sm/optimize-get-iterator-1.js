(() => {
  let returnCalled = false;
  ({}).__proto__.return = () => {
    returnCalled = true;
    return { value: 3, done: true };
  };

  print(returnCalled, false);
  let [a,b] = [1,2,3];
  print(returnCalled, true);
  print(a, 1);
  print(b, 2);
})();
