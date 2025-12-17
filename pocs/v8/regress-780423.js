var Class = {
 create: function() {
   return function kurt() {
   }
 }
};

var o1 = Class.create();
var o2 = Class.create();

print(o1 !== o2, "different functions");
print(o1.prototype !== o2.prototype, "different protos");
