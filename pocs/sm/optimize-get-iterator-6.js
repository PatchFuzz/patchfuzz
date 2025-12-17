(() => {
  ({}).__proto__[1] = 2;
  let [x,y] = [1];

  print(x, 1);
  print(y, undefined);
})();
