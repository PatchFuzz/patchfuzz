var CustomError = function(x) { this.x = x; };
CustomError.prototype = new Error();
CustomError.prototype.x = "prototype";

Object.defineProperties(CustomError.prototype, {
   'message': {
      'get': function() { return this.x; }
   }
});

print("Error: instance", String(new CustomError("instance")));
