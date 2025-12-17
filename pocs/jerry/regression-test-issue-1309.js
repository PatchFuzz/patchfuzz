var errorMessage = "toStringThrows"

var toStringThrows = {
  toString : function() {
    throw new Error(errorMessage);
  }
}

try {
  var obj = {};
  obj[toStringThrows] = 3;
  assert(false);
} catch (e) {
  assert(e.message == errorMessage);
}

