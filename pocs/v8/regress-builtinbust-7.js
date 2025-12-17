if ("Intl" in this) {
  function overflow() {
    return overflow() + 1;
  }
  Object.defineProperty = overflow;
  print(function() { Intl.Collator.supportedLocalesOf("en"); });

  var date = new Date(Date.UTC(2004, 12, 25, 3, 0, 0));
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  Object.apply = overflow;
  print(function() { date.toLocaleDateString("de-DE", options); });

  var options_incomplete = {};
  print(function() {
    date.toLocaleDateString("de-DE", options_incomplete);
  });
  print(options_incomplete.hasOwnProperty("year"));

  print(function() { date.toLocaleDateString("de-DE", undefined); });
  print(function() { date.toLocaleDateString("de-DE"); });
  print(function() { date.toLocaleDateString("de-DE", null); }, TypeError);
}
