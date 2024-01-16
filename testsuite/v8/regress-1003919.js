




var obj = {foo: 'bar'};
Object.defineProperty(obj, 'foo', {
  get: function () {
  }
});
obj.__proto__ = new Proxy([], {});



function getKey() {
  return 'values'
}


obj[getKey()] = 1;
