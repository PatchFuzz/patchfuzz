function Parent() {}

function Child() {}
Child.prototype = new Parent();
var child = new Child();

function crash() {
  return child.__proto__;
}

crash();
crash();


Parent.prototype.__defineSetter__("foo", function() { print("A"); });
Parent.prototype.__defineSetter__("foo", function() { print("B"); });

crash();


delete Object.prototype.__proto__;
crash();
