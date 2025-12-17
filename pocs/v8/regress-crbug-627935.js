if (this.Intl) {
  print("Intl.DateTimeFormat('en-US', {timeZone: 0})", RangeError);
  print("Intl.DateTimeFormat('en-US', {timeZone: true})", RangeError);
  print("Intl.DateTimeFormat('en-US', {timeZone: null})", RangeError);

  var object = { toString: function() { return "UTC" } };
  print("Intl.DateTimeFormat('en-US', {timeZone: object})");
}
