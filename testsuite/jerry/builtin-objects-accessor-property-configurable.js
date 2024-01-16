













var test_failed = false;

function verifyConfigurableAccessor (obj, name, string) {
  let prop = Object.getOwnPropertyDescriptor (obj, name);
  if (prop.get && !prop.configurable) {
    print (string + " should be configurable, but wasn't");
    test_failed = true;
  }
}

for (let builtin_name of Reflect.ownKeys (this)) {
  let builtin_obj = this[builtin_name];
  if (builtin_name[0] === builtin_name[0].toUpperCase () && typeof builtin_obj == "function") {
    for (let prop of Reflect.ownKeys (builtin_obj)) {
      verifyConfigurableAccessor (builtin_obj, prop, builtin_name + "." + prop.toString ());
    }

    let builtin_proto = builtin_obj.prototype;
    if (builtin_proto) {
      for (let prop of Reflect.ownKeys (builtin_proto)) {
        verifyConfigurableAccessor (builtin_proto, prop, builtin_name + ".prototype." + prop.toString ());
      }
    }

    builtin_proto = Reflect.getPrototypeOf (builtin_obj);
    if (builtin_proto !== Function.prototype) {
      for (let prop of Reflect.ownKeys (builtin_proto.prototype)) {
        verifyConfigurableAccessor (builtin_proto.prototype, prop, builtin_name + ".[[Prototype]].prototype." + prop.toString ());
      }
    }
  }
}

assert (!test_failed);
