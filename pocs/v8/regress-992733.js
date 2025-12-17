print("object", typeof this);
var threw = false;
try {
  this();
} catch (e) {
  threw = true;
}
print(threw);
