













var value = {};
var poisonedThen = Object.defineProperty({}, 'then', {
  get: function() {
    throw value;
  }
});
var promise = new Promise(function(resolve) {
  resolve(poisonedThen);
});
