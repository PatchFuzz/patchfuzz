function Foo() {}
Object.defineProperty(Foo.prototype, "name",
                      {get: function() { return "FooName"; }});

function ic(f) {
  return f.prototype.name;
}

print("FooName", ic(Foo));
print("FooName", ic(Foo));  
