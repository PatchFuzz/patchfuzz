var custom_valueOf = function() {
  print(null, custom_valueOf.caller);
  return 2;
}

var custom_toString = function() {
  print(null, custom_toString.caller);
  return "I used to be an adventurer like you";
}

var object = {};
object.valueOf = custom_valueOf;
object.toString = custom_toString;

print(2, Number(object));
print('I', String(object)[0]);
