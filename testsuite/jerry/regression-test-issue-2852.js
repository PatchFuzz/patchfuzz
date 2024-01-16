













function createMap (count) {
  var map = new Map()
  for (var i = 0; i < count; i++) {
    map.set(i)
  }
  return map
}

var counter = 0;
createMap(2000).forEach(function ($, key) {
  counter++;
  $ += key
})

assert(counter === 2000);
