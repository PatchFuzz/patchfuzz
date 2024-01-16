





















if (typeof (WScript) != "undefined") {
  WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js", "self");
}

var Runtime = {
  
  get isDynapogo() {
    return WScript.Arguments.length > 0 && WScript.Arguments[0] == "dynapogo";
  }
};

var tests = {
  test01: {
    name: "Bailout on function = null",
    body: function () {
      function TestSin(x) {
        var r1 = Math.sin(x);
        return r1;
      };
      if (Runtime.isDynapogo) {
        var sinOrig = Math.sin;  
        assert.throws(function() {
            Math.sin = null;
            var r = TestSin({});
            assert.isTrue(isNaN(r));
          }, TypeError);
        Math.sin = sinOrig;      
      }
      else TestSin();
    }
  },

  test02: {
    name: "Bailout on function = object, not a function",
    body: function () {
      function TestSin(x) {
        var r1 = Math.sin(x);
        return r1;
      };
      if (Runtime.isDynapogo) {
        var sinOrig = Math.sin;  
        assert.throws(function() {
            Math.sin = {};
            var r = TestSin({});
            assert.isTrue(isNaN(r));
          }, TypeError);
        Math.sin = sinOrig;      
      }
      else TestSin();
    }
  },

  test03: {
    name: "Bailout on function = wrong function",
    body: function () {
      function TestSin(x) {
        var r1 = Math.sin(x);
        return r1;
      };
      var sinOrig = Math.sin;  
      Math.sin = Math.cos;
      var r = TestSin({});
      assert.isTrue(isNaN(r));
      Math.sin = sinOrig;      
    }
  },

  test04: {
    name: "Bailout on argument = string",
    body: function () {
      function TestSin(x) {
        var r1 = Math.sin(x);
        return r1;
      };
      var r = TestSin("string");
      assert.isTrue(isNaN(r));
    }
  },

  test05: {
    name: "Bailout on argument = object",
    body: function () {
      function TestSin(x) {
        var r1 = Math.sin(x);
        return r1;
      };
      var r = TestSin({});
      assert.isTrue(isNaN(r));
    }
  },

  test06: {
    name: "Bailout on 2nd argument = string",
    body: function () {
      function TestPow(x, y) {
        var r1 = Math.pow(x, y);
        return r1;
      };
      var r = TestPow(2, "string");
      assert.isTrue(isNaN(r));
    }
  },

  test07: {
    name: "Float/int type specialized argOuts which we restore at bailout",
    body: function () {
      
      (function() {
        var i = -8.1E+18;
        var r = Math.pow(1, Math.exp(Math.atan2(1, ((~i) - 737882964))));
      })();

      (function() {
        var e = 1;
        return Math.pow(e >> 1, 3.2)
      })();

      (function() {
        var e = 1;
        Math.atan2(1, Math.pow((e >>= 1), Math.tan((-1031883772 * Math.abs(-951135089)))));
      })();

      (function() {
        var ary = new Array();
        ary[0] = 0;
        Math.pow(1808815940.1, -ary[0]);
      })();

      (function() {
        return Math.pow(Math.sin(1), Math.pow(1, 1));
      })();

      (function() { 
        var o = { x: 0 };
        var func0 = function()
        {
          Math.pow(1.1, o.x * -1);
        }
        Math.atan2(func0(), 1);
      })();
    }
  },

  test08: {
    name: "Bailout on argument after function copy-prop into InlineBuiltInStart",
    body: function () {
      for(var i in [0, 1])
        assert.isTrue(isNaN(Math.pow(Math.pow(/x/, 0.1), 0.1)));
    }
  },

  test09: {
    name: "Bailout (pre-op) on 2nd arg which is updated in the place of the call - make sure 1st arg is not updated",
    body: function() {
      var accumulator = "";
      var vOf = function vOf() { accumulator += "x"; return 3; }
      function testFunc() {
          var i = 1;
          do {
              
              var x = Math.pow(i, Runtime.isDynapogo ? i = { valueOf: vOf } : 1);
          } while (vOf == undefined);
      }
      testFunc();
      if (Runtime.isDynapogo) {
        assert.areEqual("x", accumulator, "valueOf was called wrong number of times");
      }
    }
  },
}; 

testRunner.runTests(tests);
