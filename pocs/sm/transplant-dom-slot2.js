let source = new FakeDOMObject();
print(source.slot, 42);
let {object: target, transplant} = transplantableObject({object: source});
transplant(this);
print(source.slot, 42);
print(target.slot, 42);
