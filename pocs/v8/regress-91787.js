print(function() {
  JSON.parse('"\x80unterminated');
});
