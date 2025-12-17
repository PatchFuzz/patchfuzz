"use strict";




{
  const o = {
    get foo() { return 666 },
    foo: 42,
  };
  print(42, Object.getOwnPropertyDescriptor(o, 'foo').value);
}

{
  const o = {
    set foo(_) { },
    foo: 42,
  };
  print(42, Object.getOwnPropertyDescriptor(o, 'foo').value);
}

{
  const o = {
    get foo() { return 666 },
    set foo(_) { },
    foo: 42,
  };
  print(42, Object.getOwnPropertyDescriptor(o, 'foo').value);
}

{
  const o = {
    get foo() { return 666 },
    set ['foo'.slice()](_) { },
    foo: 42,
  };
  print(42, Object.getOwnPropertyDescriptor(o, 'foo').value);
}

{
  const o = {
    get ['foo'.slice()]() { return 666 },
    set ['foo'.slice()](_) { },
    foo: 42,
  };
  print(42, Object.getOwnPropertyDescriptor(o, 'foo').value);
}




{
  const o = {
    foo: 666,
    get foo() { return 42 },
  };
  print(42, Object.getOwnPropertyDescriptor(o, 'foo').get());
}

{
  const o = {
    foo: 666,
    set foo(_) { },
  };
  print(undefined, Object.getOwnPropertyDescriptor(o, 'foo').get);
  print(undefined, Object.getOwnPropertyDescriptor(o, 'foo').value);
}

{
  const o = {
    foo: 666,
    get foo() { return 42 },
    set foo(_) { },
  };
  print(42, Object.getOwnPropertyDescriptor(o, 'foo').get());
}

{
  const o = {
    foo: 666,
    get ['foo'.slice()]() { return 42 },
    set foo(_) { },
  };
  print(42, Object.getOwnPropertyDescriptor(o, 'foo').get());
}

{
  const o = {
    foo: 666,
    get ['foo'.slice()]() { return 42 },
    set ['foo'](_) { },
  };
  print(42, Object.getOwnPropertyDescriptor(o, 'foo').get());
}




{
  const o = {
    get foo() { return 42 },
    foo: 666,
    set foo(_) { },
  };
  print(undefined, Object.getOwnPropertyDescriptor(o, 'foo').get);
  print(undefined, Object.getOwnPropertyDescriptor(o, 'foo').set());
}

{
  const o = {
    set foo(_) { },
    foo: 666,
    get foo() { return 42 },
  };
  print(42, Object.getOwnPropertyDescriptor(o, 'foo').get());
}
