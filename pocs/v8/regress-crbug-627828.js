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
  print(23, f().x());
  print(23, f().x());
  %OptimizeFunctionOnNextCall(f);
  print(23, f().x());
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
  print(23, f().x_proto());
  print(23, f().x_proto());
  %OptimizeFunctionOnNextCall(f);
  print(23, f().x_proto());

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
  print(42, g().y());
  print(42, g().y());
  %OptimizeFunctionOnNextCall(g);
  print(42, g().y());
})();
