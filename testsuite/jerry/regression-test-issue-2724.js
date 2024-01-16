













try {
  var obj = { reverse : Int32Array.prototype.join } ;
  Object.defineProperty( obj, 'length', { 'get' : function(toPrecision) { return Object.create(/x/); }});
  obj.reverse("$01$02$11$20");
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}
