


























var custom_valueOf = function() {
  assertEquals(null, custom_valueOf.caller);
  return 2;
}

var custom_toString = function() {
  assertEquals(null, custom_toString.caller);
  return "I used to be an adventurer like you";
}

var object = {};
object.valueOf = custom_valueOf;
object.toString = custom_toString;

assertEquals(2, Number(object));
assertEquals('I', String(object)[0]);
