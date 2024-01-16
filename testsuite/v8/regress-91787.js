































assertThrows(function() {
  JSON.parse('"\x80unterminated');
});
