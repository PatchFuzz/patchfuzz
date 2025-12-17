function intact(name) {
  let state = getFuseState();
  if (!(name in state)) {
    throw "No such fuse " + name;
  }
  return state[name].intact
}

function testRealmChange() {
  let g = newGlobal();
  g.evaluate(intact.toString())

  
  let rdel = g.evaluate("function del(o) { delete o.prototype[Symbol.iterator] };del")
  
  g.evaluate(`print(intact("ArrayPrototypeIteratorFuse"), true)`);

  
  let g2 = newGlobal();
  g2.evaluate(intact.toString())

  
  g2.rdel = rdel;

  
  g2.evaluate(`rdel(Array)`);

  
  g.evaluate(`print(intact("ArrayPrototypeIteratorFuse"), true)`);

  
  
  g2.evaluate(`print(intact("ArrayPrototypeIteratorFuse"), false)`);
}

print();

testRealmChange();

function testInNewGlobal(pre, post) {
  g = newGlobal();
  g.evaluate(intact.toString());
  g.evaluate(pre)
  g.evaluate("print()");
  g.evaluate(post);
}

testInNewGlobal("delete Array.prototype[Symbol.iterator]", `print(intact("ArrayPrototypeIteratorFuse"), false)`)
testInNewGlobal("([])[Symbol.iterator]().__proto__['return'] = () => 10;", `print(intact("ArrayIteratorPrototypeHasNoReturnProperty"), false)`)
testInNewGlobal("([])[Symbol.iterator]().__proto__.__proto__['return'] = () => 10;", `print(intact("IteratorPrototypeHasNoReturnProperty"), false)`)
testInNewGlobal("Object.prototype['return'] = () => 10;", `print(intact("ObjectPrototypeHasNoReturnProperty"), false)`)
testInNewGlobal(`print(intact("ArrayIteratorPrototypeHasIteratorProto"), true); Object.setPrototypeOf(( ([])[Symbol.iterator]().__proto__ ), {a:10})`, `print(intact("ArrayIteratorPrototypeHasIteratorProto"), false);`);
testInNewGlobal(`print(intact("IteratorPrototypeHasObjectProto"), true); Object.setPrototypeOf( ( ([])[Symbol.iterator]().__proto__.__proto__ ), {a:10})`, `print(intact("IteratorPrototypeHasObjectProto"), false);`);

testInNewGlobal(`print(intact("HasSeenObjectEmulateUndefinedFuse"), true); createIsHTMLDDA()`, `print(intact("HasSeenObjectEmulateUndefinedFuse"), false);`);
testInNewGlobal(`print(intact("HasSeenArrayExceedsInt32LengthFuse"), true); const x = []; x[2147483649] = 1`, `print(intact("HasSeenArrayExceedsInt32LengthFuse"), false);`);


print(intact("HasSeenObjectEmulateUndefinedFuse"), false);
print(intact("HasSeenArrayExceedsInt32LengthFuse"), false);
