let f = ({a = (({b = {a = c} = {
  a: 0x1234
}}) => 1)({})}, c) => 1;

print(() => f({}), ReferenceError);

let g = ({a = (async ({b = {a = c} = {
  a: 0x1234
}}) => 1)({})}, c) => a;

testAsync(assert => {
  print(1);
  g({}).catch(e => {
    print("ReferenceError", e.name);
  });
});
