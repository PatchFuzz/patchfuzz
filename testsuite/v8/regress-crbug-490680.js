



var sentinel = null;

try {
  throw { toString: function() { sentinel = "observed"; } };
} catch (e) {
}

L: try {
  throw { toString: function() { sentinel = "observed"; } };
} finally {
  break L;
}

assertNull(sentinel);
