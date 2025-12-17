var alias = eval;
function e(s) { return alias(s); }

print(42, e("42"));
print(Object, e("Object"));
print(e, e("e"));

var caught = false;
try {
  e('s');  
} catch (e) {
  caught = true;
  print(e instanceof ReferenceError);
}
print(caught);
