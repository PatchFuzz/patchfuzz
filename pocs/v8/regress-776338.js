const obj = {};
Object.defineProperty(obj, 'value', {
  enumerable: true,
  configurable: true,
  get: assertUnreachable,
  set: assertUnreachable,
});

let called_get = false;
let called_has = false;
let called_set = false;

const has = function(target, prop) {
  print('value', prop);
  called_has = true;
  return false;  
};

const get = function(target, prop) {
  print('value', prop);
  called_get = true;
  return 'yep';
};

const set = function(target, prop, value) {
  print('value', prop);
  called_set = true;
  return true;    
};

const proxy = new Proxy(obj, { has, get, set });

print(Reflect.has(proxy, 'value'));
print(called_has);

print('nope', proxy.value = 'nope');
print(called_set);

print('yep', proxy.value);
print(called_get);
