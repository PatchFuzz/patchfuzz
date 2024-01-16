








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

assertTrue(isLazy(foo_factory));

let inital_template_object = get_foo_template_object();
assertEquals(inital_template_object, get_foo_template_object(),
             "Template object identity should be preserved");



%ForceFlush(foo_factory);
assertTrue(isLazy(foo_factory));


gc();
gc();
gc();



assertSame(inital_template_object, get_foo_template_object(),
           "Template object identity should be preserved");
