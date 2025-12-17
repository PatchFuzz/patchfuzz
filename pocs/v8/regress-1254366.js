function gee() {};

Object.prototype.findOrStore = function() {
  var z = this.vvv = gee;
  return z;
};

var a =  new Object();
print(gee, a.findOrStore());
print(gee, a.findOrStore());
