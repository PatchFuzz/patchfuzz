var x = {};


x.__defineGetter__("a", function() {
  try {
    y.x = 40;
  } catch (e) {
    print(3, e.stack.split('\n').length);
  }
  return 40;
});

x.__defineSetter__("a", function(val) {
  try {
    y.x = 40;
  } catch(e) {
    print(3, e.stack.split('\n').length);
  }
});


function getB() {
  try {
    y.x = 30;
  } catch (e) {
    print(3, e.stack.split('\n').length);
  }
  return 30;
}

function setB(val) {
  try {
    y.x = 30;
  } catch(e) {
    print(3, e.stack.split('\n').length);
  }
}

x.__defineGetter__("b", getB);
x.__defineSetter__("b", setB);


var descriptor  = {
  get: function() {
    try {
      y.x = 40;
    } catch (e) {
      print(3, e.stack.split('\n').length);
    }
    return 40;
  },
  set: function(val) {
    try {
      y.x = 40;
    } catch(e) {
      print(3, e.stack.split('\n').length);
    }
  }
}

Object.defineProperty(x, 'c', descriptor)



x.a;
x.b;
x.c;
x.a = 1;
x.b = 1;
x.c = 1;


xx = {}
xx.__proto__ = x

xx.a;
xx.b;
xx.c;
xx.a = 1;
xx.b = 1;
xx.c = 1;
