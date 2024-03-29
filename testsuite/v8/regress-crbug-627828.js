





(function TestDeoptFromComputedNameInObjectLiteral() {
  function f() {
    var o = {
      toString: function() {
        %DeoptimizeFunction(f);
        return "x";
      }
    };

    return {
      [o]() {
        return 23;
      }
    };
  };
  %PrepareFunctionForOptimization(f);
  assertEquals(23, f().x());
  assertEquals(23, f().x());
  %OptimizeFunctionOnNextCall(f);
  assertEquals(23, f().x());
})();

(function TestDeoptFromComputedNameInObjectLiteralWithModifiedPrototype() {
  
  

  Object.defineProperty(Object.prototype, 'x_proto', {
    get: function() {
      return 21;
    },
    set: function() {}
  });

  function f() {
    var o = {
      toString: function() {
        %DeoptimizeFunction(f);
        return "x_proto";
      }
    };

    return {
      [o]() {
        return 23;
      }
    };
  };
  %PrepareFunctionForOptimization(f);
  assertEquals(23, f().x_proto());
  assertEquals(23, f().x_proto());
  %OptimizeFunctionOnNextCall(f);
  assertEquals(23, f().x_proto());

  delete Object.prototype.c;

})();

(function TestDeoptFromComputedNameInClassLiteral() {
  function g() {
    var o = {
      toString: function() {
        %DeoptimizeFunction(g);
        return "y";
      }
    };

    class C {
      [o]() {
        return 42;
      }
    }

    return new C();
  };
  %PrepareFunctionForOptimization(g);
  assertEquals(42, g().y());
  assertEquals(42, g().y());
  %OptimizeFunctionOnNextCall(g);
  assertEquals(42, g().y());
})();
