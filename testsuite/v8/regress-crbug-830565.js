





d8.file.execute('test/mjsunit/test-async.js');

testAsync(assert => {
  assert.plan(1);
  const error = new TypeError('Throwing');
  Promise.resolve({ then(resolve, reject) {
    throw error;
  }}).then(v => {
    assert.unreachable();
  }, e => {
    assert.equals(error, e);
  });
});
