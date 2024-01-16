




























function continueWithinLoop() {
  var result;
  for (var key in [0]) {
    result = "hopla";
    continue;
  }
  return result;
};

assertEquals("hopla", continueWithinLoop());

function breakWithinLoop() {
  var result;
  for (var key in [0]) {
    result = "hopla";
    break;
  }
  return result;
};

assertEquals("hopla", continueWithinLoop());
