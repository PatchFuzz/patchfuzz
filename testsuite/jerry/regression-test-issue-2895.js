













function createMap (count) {
  var map = new Map ( )
  for (var i = { member : 0, valueOf: function () { return this.member } }; i < count ; i ++) {
    map.set(i);
  }
  return map
}
createMap(2000).forEach(function($, $) {})
