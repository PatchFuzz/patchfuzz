let setter_calls = 0;



function setter_function() {
  print("Oh no, someone called the setter!");
  setter_calls++;
}

class ClassWithFooSetter {
  constructor() {
    
    
    Object.defineProperty(this, "foo", {
      configurable: true,
      set: setter_function,
    });
  }
}

class ClassWithFooField extends ClassWithFooSetter {
  
  
  
  foo = 42;
}


let o1 = new ClassWithFooField();

let o2 = new ClassWithFooField();

print(Object.getOwnPropertyDescriptor(o1, "foo"), {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true,
});
print(Object.getOwnPropertyDescriptor(o2, "foo"), {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true,
});

print(setter_calls, 0);
