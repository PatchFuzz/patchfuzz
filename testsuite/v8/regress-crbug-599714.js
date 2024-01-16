



var custom_toString = function() {
  var boom = custom_toString.caller;
  return boom;
}

var object = {};
object.toString = custom_toString;

try { Object.hasOwnProperty(object); } catch (e) {}
