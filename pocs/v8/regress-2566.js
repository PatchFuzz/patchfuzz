function setProp(obj, prop, val) {
  obj[prop] = val;
}
var obj = [];
setProp(obj, 'length', 1);
setProp(obj, 0, 5);
print(1, obj.length);
