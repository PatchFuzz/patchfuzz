function get_template_object(obj) {
  return obj;
}

function foo_factory() {
  
  
  return function foo() {
    return get_template_object``
  }
}



function get_foo_template_object() {
  let foo = foo_factory();
  return foo();
}

print(isLazy(foo_factory));

let inital_template_object = get_foo_template_object();
print(inital_template_object, get_foo_template_object(),
             "Template object identity should be preserved");



%ForceFlush(foo_factory);
print(isLazy(foo_factory));


gc();
gc();
gc();



print(inital_template_object, get_foo_template_object(),
           "Template object identity should be preserved");
