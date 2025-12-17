function TestAccessorWrapping(primitive) {
  var prototype = Object.getPrototypeOf(Object(primitive))
  
  var strict_type = typeof primitive;
  Object.defineProperty(prototype, "strict", {
    get: function() { "use strict"; print(strict_type, typeof this); },
    set: function() { "use strict"; print(strict_type, typeof this); }
  });
  primitive.strict = primitive.strict;
  
  var sloppy_type = typeof Object(primitive);
  Object.defineProperty(prototype, "sloppy", {
    get: function() { print(sloppy_type, typeof this); },
    set: function() { print(sloppy_type, typeof this); }
  });
  primitive.sloppy = primitive.sloppy;
}

TestAccessorWrapping(true);
TestAccessorWrapping(0);
TestAccessorWrapping({});
TestAccessorWrapping("");
