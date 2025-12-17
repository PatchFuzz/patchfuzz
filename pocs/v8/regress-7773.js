(function testFunctionNames() {
  let descriptor = {
    value: '',
    writable: false,
    enumerable: false,
    configurable: true
  };
  
  print(
      descriptor, Object.getOwnPropertyDescriptor(function(){}, 'name'));
  let a = { fn: function(){} };
  print('fn', a.fn.name);
  descriptor.value = 'fn';
  print(descriptor, Object.getOwnPropertyDescriptor(a.fn, 'name'));

  let b = { __proto__: function(){} };
  print('', b.__proto__.name);
  descriptor.value = '';
  print(
      descriptor, Object.getOwnPropertyDescriptor(b.__proto__, 'name'));

  let c = { fn: function F(){} };
  print('F', c.fn.name);
  descriptor.value = 'F';
  print(descriptor, Object.getOwnPropertyDescriptor(c.fn, 'name'));

  let d = { __proto__: function E(){} };
  print('E', d.__proto__.name);
  descriptor.value = 'E';
  print(
      descriptor, Object.getOwnPropertyDescriptor(d.__proto__, 'name'));
})();

(function testClassNames() {
  let descriptor = {
    value: '',
    writable: false,
    enumerable: false,
    configurable: true
  };

  
  descriptor.value = '';
  print(descriptor, Object.getOwnPropertyDescriptor(class {}, 'name'));
  descriptor.value = 'C';
  print(descriptor, Object.getOwnPropertyDescriptor(class C {}, 'name'));

  let a = { fn: class {} };
  print('fn', a.fn.name);
  descriptor.value = 'fn';
  print(descriptor, Object.getOwnPropertyDescriptor(a.fn, 'name'));

  let b = { __proto__: class {} };
  print('', b.__proto__.name);
  descriptor.value = '';
  print(
    descriptor, Object.getOwnPropertyDescriptor(b.__proto__, 'name'));

  let c = { fn: class F {} };
  print('F', c.fn.name);
  descriptor.value = 'F';
  print(descriptor, Object.getOwnPropertyDescriptor(c.fn, 'name'));

  let d = { __proto__: class F {} };
  print('F', d.__proto__.name);
  descriptor.value = 'F';
  print(
      descriptor, Object.getOwnPropertyDescriptor(d.__proto__, 'name'));
})();
