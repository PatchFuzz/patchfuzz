




if (this.WScript && this.WScript.LoadScriptFile) {
  this.WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");
}

function getPropertiesString(obj) {
  var props = []
  for (var x in obj) {
    props.push(x);
  }
  props = props.sort();
  return props.join();
}

var Tests = [function () {
    var obj = {}; 
    obj.a1 = 1; 
    obj.a2 = 2; 
    obj.a3 = 3; 
    delete obj.a3; 
    assert.isTrue(obj.a1 === 1);
    assert.isTrue(obj.a2 === 2);
    assert.isTrue(obj.a3 === undefined);
  },
  function () {
    var obj = {}; 
    obj.b1 = 1; 
    obj.b2 = 2; 

    var obj1 = {};
    obj1.b1 = 1; 
    obj1.b3 = 3; 

    delete obj1.b3; 
    assert.isTrue(obj.b1 === 1);
    assert.isTrue(obj.b2 === 2);
    assert.isTrue(obj.b3 === undefined);

    assert.isTrue(obj1.b1 === 1);
    assert.isTrue(obj1.b2 === undefined);
    assert.isTrue(obj1.b3 === undefined);
  },
  function () {
    var obj = {
      c1: 1
    }; 
    obj.c2 = 2; 

    delete obj.c2; 
    assert.isTrue(obj.c1 === 1);
    assert.isTrue(obj.c2 === undefined);
  },
  function () {
    var obj = {
      d1: 1,
      d2: 2
    }; 
    var obj1 = {
      d1: 1,
      d2: 2
    }; 

    delete obj.d2; 
    assert.isTrue(obj.d1 === 1);
    assert.isTrue(obj.d2 === undefined);
    assert.isTrue(obj1.d1 === 1);
    assert.isTrue(obj1.d2 === 2);
  },
  function () {
    function foo() {
      this.e1 = 1; 
      this.e2 = 2; 
      this.e3 = 3; 
      this.e4 = 4; 
      this.e5 = 5; 
    }
    var obj = new foo();
    var obj1 = new foo();
    
    var obj2 = new foo();

    delete obj1.e5; 
    assert.isTrue(obj.e1 === 1);
    assert.isTrue(obj.e2 === 2);
    assert.isTrue(obj.e3 === 3);
    assert.isTrue(obj.e4 === 4);
    assert.isTrue(obj.e5 === 5);

    assert.isTrue(obj1.e1 === 1);
    assert.isTrue(obj1.e2 === 2);
    assert.isTrue(obj1.e3 === 3);
    assert.isTrue(obj1.e4 === 4);
    assert.isTrue(obj1.e5 === undefined);

    assert.isTrue(obj2.e1 === 1);
    assert.isTrue(obj2.e2 === 2);
    assert.isTrue(obj2.e3 === 3);
    assert.isTrue(obj2.e4 === 4);
    assert.isTrue(obj2.e5 === 5);
  },
  function () {
    function foo() {
      this.f1 = 1;
      this.f2 = 2;
      this.f3 = 3;
      this.f4 = 4;
      this.f5 = 5;
      this.f6 = 6;
      this.f7 = 7;
      this.f8 = 8;
    }
    var obj = new foo();
    var obj1 = new foo();
    
    var obj2 = new foo();

    delete obj1.f8; 
    assert.isTrue(obj1.f1 === 1);
    assert.isTrue(obj1.f2 === 2);
    assert.isTrue(obj1.f3 === 3);
    assert.isTrue(obj1.f4 === 4);
    assert.isTrue(obj1.f5 === 5);
    assert.isTrue(obj1.f6 === 6);
    assert.isTrue(obj1.f7 === 7);
    assert.isTrue(obj1.f8 === undefined);
  },
  function () {
    function foo() {
      this.g1 = 1;
      this.g2 = 2;
      this.g3 = 3;
      this.g4 = 4;
      this.g5 = 5;
      this.g6 = 6;
      this.g7 = 7;
      this.g8 = 8;
    }
    var obj = new foo();
    obj.g9 = 9; 

    delete obj.g9; 
    assert.isTrue(obj.g1 === 1);
    assert.isTrue(obj.g2 === 2);
    assert.isTrue(obj.g3 === 3);
    assert.isTrue(obj.g4 === 4);
    assert.isTrue(obj.g5 === 5);
    assert.isTrue(obj.g6 === 6);
    assert.isTrue(obj.g7 === 7);
    assert.isTrue(obj.g8 === 8);
    assert.isTrue(obj.g9 === undefined);
  },
  function () {
    var obj = {};
    obj.h1 = 1; 
    obj.h2 = 2; 
    obj[0] = 4; 
    obj.h3 = 3; 
    delete obj.h3; 
    assert.isTrue(obj.h1 === 1);
    assert.isTrue(obj.h2 === 2);
    assert.isTrue(obj.h3 === undefined);
    assert.isTrue(obj[0] === 4);
  },
  function () {
    function foo() {
      this.i1 = 1,
      this.i2 = 2
    }
    var obj = new foo();
    var obj1 = new foo();
    var obj2 = new foo();

    obj[0] = 10; 
    obj[1] = 11;
    delete obj.i2; 
    assert.isTrue(obj.i1 === 1);
    assert.isTrue(obj.i2 === undefined);
    assert.isTrue(obj[0] === 10);
    assert.isTrue(obj[1] === 11);
  },
  function () {
    var obj = {
      j1: 1,
      j2: 2,
      j3: 3,
      j4: 4
    }

    
    for (var i in obj) {}

    var expectedProps = "j1j2j3j4";
    var elemCount = 0;
    var propsString = "";
    for (var i in obj) {
      propsString += i;
      elemCount++;
      if (elemCount == 2) {
        delete obj.j4; 
      } else if (elemCount == 3) {
        obj.j4 = 5; 
      }
    }
    assert.isTrue(propsString === expectedProps);
  },
  function () {
    var obj = {
      k1: 1,
      k2: 2,
      k3: 3,
      k4: 4
    }

    
    for (var i in obj) {}

    var expectedProps = "k1k2k3k4";
    var elemCount = 0;
    var propsString = "";
    for (var i in obj) {
      propsString += i;
      elemCount++;
      if (elemCount == 2) {
        delete obj.k4; 
        obj.k4 = 5; 
        obj.k5 = 6; 
      }
    }
    assert.isTrue(propsString === expectedProps);
  },
  function () {
    var obj = {
      l1: 1,
      l2: 2,
      l3: 3
    }

    
    var expectedProps = "l1l2l3";
    var elemCount = 0;
    var propsString = "";
    for (var i in obj) {
      propsString += i;
      elemCount++;
      if (elemCount == 2) {
        delete obj.l3; 
        obj.l3 = 5 
      }
    }
    assert.isTrue(propsString === expectedProps);
  },
  function () {
    var obj = {
      m1: 1,
      m2: 2,
      m3: 3
    };

    
    var obj1 = {
      m1: 1,
      m2: 2,
      m3: 3
    };

    
    var expectedProps = "m1m2m3";
    var elemCount = 0;
    var propsString = "";
    for (var i in obj1) {
      propsString += i;
      elemCount++;
      if (elemCount == 2) {
        delete obj.l3; 
        obj.l3 = 5 
      }
    }
    assert.isTrue(propsString === expectedProps);
  },
  function () {
    var obj = {
      n1: 1,
      n2: 2
    };

    obj.n3 = 3; 
    obj[10] = 10; 
    delete obj.n3;
    assert.isTrue(obj[10] === 10);
    assert.isTrue(obj.n3 === undefined);
  },
  function () {
    var arrObj0 = {};
    var func1 = function () {
      delete arrObj0.length;
      arrObj0 = {
        method0: function () {},
        method1: function () {}
      };
    };
    var func4 = function () {
      arrObj0[15] = 1;
      func1();
      return arrObj0.length = arrObj0;
    };
    func4();
    func4();
  },
  function () {
    var obj1 = {};
    obj1.o1 = 1;
    var obj2 = {};
    obj2.o2 = 1; 
    obj2.__proto__ = obj1; 
    delete obj2.o2; 
    assert.areEqual(1, obj2.o1, "");
  },
  function () {
    var obj1 = {};
    obj1.p1 = 1;
    var obj2 = {};
    obj2.__proto__ = obj1; 
    obj2.p2 = 1; 
    delete obj2.p2; 
    assert.areEqual(1, obj2.p1, "");
  },
  function () {
    var obj1 = {};
    obj1.q1 = 1;
    obj1.q2 = 1;
    var obj2 = {};
    obj2.q3 = 1; 
    obj1.q4 = 1; 
    obj2.__proto__ = obj1; 
    delete obj2.q3; 
    assert.areEqual('q1,q2,q4', getPropertiesString(obj2), "");
  },
  function () {
    var obj1 = {};
    obj1.r1 = 1;
    obj1.r2 = 1;
    var obj2 = {};
    obj2.r3 = 1; 
    obj2.r4 = 1; 
    obj2.__proto__ = obj1; 
    delete obj2.r4; 
    assert.areEqual('r1,r2,r3', getPropertiesString(obj2), "");
    delete obj2.r3;
    assert.areEqual('r1,r2', getPropertiesString(obj2), "");
  }
]

for (var i = 0; i < 3; ++i) {
  for (var j = 0; j < Tests.length; ++j) {
    Tests[j]();
  }
}

WScript.Echo("Pass");
