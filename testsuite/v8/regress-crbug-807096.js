





d8.file.execute('test/mjsunit/test-async.js');






let f = ({a = (({b = {a = c} = {
  a: 0x1234
}}) => 1)({})}, c) => 1;

assertThrows(() => f({}), ReferenceError);

let g = ({a = (async ({b = {a = c} = {
  a: 0x1234
}}) => 1)({})}, c) => a;

testAsync(assert => {
  assert.plan(1);
  g({}).catch(e => {
    assert.equals("ReferenceError", e.name);
  });
});
