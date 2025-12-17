function test(expected, holder) {
  print(expected, holder.property);
}

var holder = {}
holder.__proto__ = null;
holder.property = "foo";
delete holder.property;
test(undefined, holder);
test(undefined, holder);
test(undefined, holder);
holder.property = "bar";
test("bar", holder);
test("bar", holder);



function test2(expected, holder) {
  print(expected, holder.prop2);
}

var holder2 = {}
holder2.prop2 = "foo";
holder2.__proto__ = null;
function Receiver() {}
Receiver.prototype = holder2;

var rec2 = new Receiver();
delete holder2.prop2;

test2(undefined, rec2);
test2(undefined, rec2);
test2(undefined, rec2);
holder2.prop2 = "bar";
test2("bar", rec2);
test2("bar", rec2);
