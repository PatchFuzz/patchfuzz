




var foo = function() {
  var x; 
}

var o = {
  bar: function() {
    this; 
    return 0;
  }
};

foo();
o.bar();

WScript.Echo("PASS");
