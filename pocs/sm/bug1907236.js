try {
  new RegExp("[\\00]", "u");
} catch (e) {
  print(e.message, "invalid decimal escape in regular expression");
}
