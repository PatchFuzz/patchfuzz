"use strict";
var realm = Realm.create();
var OtherTypeError = Realm.eval(realm, 'TypeError');

class Derived extends Object {
  constructor() {
    return null;
  }
}

print(() => { new Derived() }, TypeError);

var OtherDerived = Realm.eval(realm,
   "'use strict';" +
   "class Derived extends Object {" +
      "constructor() {" +
        "return null;" +
      "}};");


print(() => { new OtherDerived() }, TypeError);
