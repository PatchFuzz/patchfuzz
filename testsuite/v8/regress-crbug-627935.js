



if (this.Intl) {
  assertThrows("Intl.DateTimeFormat('en-US', {timeZone: 0})", RangeError);
  assertThrows("Intl.DateTimeFormat('en-US', {timeZone: true})", RangeError);
  assertThrows("Intl.DateTimeFormat('en-US', {timeZone: null})", RangeError);

  var object = { toString: function() { return "UTC" } };
  assertDoesNotThrow("Intl.DateTimeFormat('en-US', {timeZone: object})");
}
