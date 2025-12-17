testAsync(assert => {
  print(1);
  const error = new TypeError('Throwing');
  Promise.resolve({ then(resolve, reject) {
    throw error;
  }}).then(v => {
    print();
  }, e => {
    print(error, e);
  });
});
