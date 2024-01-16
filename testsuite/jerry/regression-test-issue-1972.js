













try {
  [].length = {
    valueOf: function() {
      return Array.prototype.push (1), Object.freeze (Array.prototype);
    }
  }
  assert (false);
}
catch (e) {
  assert (e instanceof TypeError);
}
