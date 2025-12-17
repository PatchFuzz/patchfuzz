function defineSetter(o) {
  o.__defineSetter__('property', function() {});
}

defineSetter(Object.prototype);
property = 0;
defineSetter(this);
var keys = Object.keys(this);
