let obj1 = {
  foo: [],
  bar: 1
};
let obj2 = {
  foo: [{}],
  bar: 2
};
print('{"foo":[],"bar":1}', JSON.stringify(obj1));
print('{"foo":[{}],"bar":2}', JSON.stringify(obj2));
Object.defineProperty(obj2, undefined, { get: function () {}});
print('{"foo":[],"bar":1}', JSON.stringify(obj1));
print('{"foo":[{}],"bar":2}', JSON.stringify(obj2));
