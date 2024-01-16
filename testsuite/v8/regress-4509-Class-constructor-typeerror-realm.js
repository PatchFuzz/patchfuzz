



"use strict";
var realm = Realm.create();
var OtherTypeError = Realm.eval(realm, 'TypeError');

class Derived extends Object {
  constructor() {
    return null;
  }
}

assertThrows(() => { new Derived() }, TypeError);

var OtherDerived = Realm.eval(realm,
   "'use strict';" +
   "class Derived extends Object {" +
      "constructor() {" +
        "return null;" +
      "}};");


assertThrows(() => { new OtherDerived() }, TypeError);
