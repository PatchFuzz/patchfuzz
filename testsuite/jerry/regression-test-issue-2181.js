













var error = {};

try {
  var arrayBuffer = new ArrayBuffer(1);
  var start = { valueOf : function ( ) { throw error; } };
  var end = { valueOf : function ( ) { } };

  arrayBuffer.slice(start, end);
  assert(false);
} catch (e) {
  assert(e === error);
}
