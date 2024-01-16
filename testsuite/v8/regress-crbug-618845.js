





function Foo() {}
Object.defineProperty(Foo.prototype, "name",
                      {get: function() { return "FooName"; }});

function ic(f) {
  return f.prototype.name;
}

assertEquals("FooName", ic(Foo));
assertEquals("FooName", ic(Foo));  
