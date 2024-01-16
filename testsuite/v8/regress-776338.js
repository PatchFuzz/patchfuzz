



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
  assertEquals('value', prop);
  called_has = true;
  return false;  
};

const get = function(target, prop) {
  assertEquals('value', prop);
  called_get = true;
  return 'yep';
};

const set = function(target, prop, value) {
  assertEquals('value', prop);
  called_set = true;
  return true;    
};

const proxy = new Proxy(obj, { has, get, set });

assertFalse(Reflect.has(proxy, 'value'));
assertTrue(called_has);

assertEquals('nope', proxy.value = 'nope');
assertTrue(called_set);

assertEquals('yep', proxy.value);
assertTrue(called_get);
