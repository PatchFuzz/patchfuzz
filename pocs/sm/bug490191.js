function f(param) {
  var w;
  return eval("\
    (function(){\
      this.__defineGetter__(\"y\", function() { return ({\
        x: function(){ return w }()\
      }); })\
    });\
  ");
}
(f())();
(new Function("eval(\"y\")"))();
