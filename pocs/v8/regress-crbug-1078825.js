(function() {
  const p1 = Promise.reject(1);
  const p2 = Promise.resolve(1);
  Object.defineProperty(p2, "then", {});

  testAsync(assert => {
    print(1);
    Promise.any([p1, p2]).then(
      assert.unreachable,
      (e) => { print(true, e instanceof TypeError); });
    });
})();
