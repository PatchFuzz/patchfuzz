

 try {
  Reflect.construct (String, "");
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  Reflect.construct (String, "randomText");
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

class MyString extends String {};
var s1= new MyString();

assert(Object.getPrototypeOf(s1) == MyString.prototype)
