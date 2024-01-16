


























var extend = function (d, b) {
  function __() { this.constructor = d; }
  __.prototype = b.prototype;
  d.prototype = new __();
};

var Car = (function (Super) {
  var Car = function () {
    var self = this;

    Super.call(self);

    Object.defineProperties(self, {
      "make": {
        enumerable: true,
        configurable: true,
        get: function () {
          return "Ford";
        }
      }
    });

    self.copy = function () {
      throw new Error("Meant to be overriden");
    };

    return self;
  };

  extend(Car, Super);

  return Car;
}(Object));


var SuperCar = ((function (Super) {
  var SuperCar = function (make) {
    var self = this;

    Super.call(self);


    Object.defineProperties(self, {
      "make": {
        enumerable: true,
        configurable: true,
        get: function () {
          return make;
        }
      }
    });

    
    self.copy = function () { };

    return self;
  };
  extend(SuperCar, Super);
  return SuperCar;
})(Car));

assertEquals("Ford", new Car().make);
assertEquals("Bugatti", new SuperCar("Bugatti").make);
assertEquals("Lambo", new SuperCar("Lambo").make);
assertEquals("Shelby", new SuperCar("Shelby").make);
