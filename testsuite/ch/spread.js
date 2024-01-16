





WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

function p(x) {
  WScript.Echo(x);
}

var tests = [
  {
      name: "Testing spread array literals (all should be the same)",
      body: function () {
          var a = [1, 2];
          var b = [3];
          var c = [];
          var d = [4, 5, 6];

          var joined = [];
          joined[0] = [1, 2, 3, 4, 5, 6];
          joined[1] = [...a, ...b, ...c, ...d];
          joined[2] = [1, 2, ...b, ...d];
          joined[3] = [...[1, 2], ...b, ...[], ...[...d]];
          joined[4] = [...[], ...joined[2], ...[], ...c];
          joined[5] = [...a, ...b, ...c, 4, 5, 6];

          for (var i = 0; i < joined.length; ++i) {
            assert.areEqual(joined[i], joined[0], "joined[" + i + "] +  ===  + joined[" + 0 + "]");
          }
      }
  },
  {
    name: "Bug Issue 5678, Spread should not set property descriptors on missing elements of target array",
    body: function () {
      var a = [1,,...[3]];
      assert.isFalse(Reflect.has(a, 1));
      assert.isUndefined(Object.getOwnPropertyDescriptor(a, 1));
    }
  },
  {
    name: "Testing call with spread args (all should be the same)",
    body: function() {
      var a = [1, 2];
      var b = [3];
      var c = [];
      var d = [4, 5, 6];

      function quad(a, b, c, x) {
        return a*x*x + b*x + c;
      }

      var result = [];
      result[0] = quad(1, 2, 3, 4);
      result[1] = quad(...a, ...b, ...c, 4);
      result[2] = quad(...a, ...b, ...[4]);
      result[3] = quad(...[...a, ...b, ...c], 4);

      for (var j = 0; j < result.length; ++j) {
        assert.areEqual(result[j], result[0], "result[" + j + "] === result[0]");
      }
    }
  },
  {
    name: "Testing spread with a lot of padding numbers",
    body: function () {
      function quad(a, b, c, x) {
        return a*x*x + b*x + c;
      }

      var e = [7, 8];
      var f = [12, 13];
      var largeLiteral = [1, 2, 3, 4, 5, 6, ...e, 9, 10, 11, ...f, 14, 15, 16, 17, 18, 19, 20];
      var largeLiteralFull = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

      assert.areEqual(largeLiteral, largeLiteralFull, "Array literals equal");
      assert.areEqual(quad(1, 2, 3, 4, 5, 6, ...e, 9, 10, 11, ...f, 14, 15, 16, 17, 18, 19, 20), quad(1, 2, 3, 4, 5, 6), "Calls equal");
    }
  },
  {
    name: "Testing array literals with gaps",
    body: function () {
      assert.areEqual([1, undefined, 3], [...[1,,3]], "Spreading missing values gives undefined in the new array elements");
      assert.areEqual([undefined, undefined, 1, undefined, 2, 3, 1, 2, 3, 3], [...[...[,,1,,2,3], ...[1, 2, 3], 3]], "Spreading missing values gives undefined in the new array elements");
    }
  },
  {
    name: "Testing call spread args with gaps",
    body: function () {
        function spreadValid1(a, b, c, d) {
            assert.areEqual(1,         a, "Spreading call arguments with array gaps: a is 1");
            assert.areEqual(undefined, b, "Spreading call arguments with array gaps: b is undefined");
            assert.areEqual(3,         c, "Spreading call arguments with array gaps: c is 3");
            assert.areEqual(undefined, d, "Spreading call arguments with array gaps: d is undefined");
        }
        spreadValid1(...[1, , 3,]);

        function spreadValid2(e, f, g, h) {
            assert.areEqual(4,         e, "Spreading nested call arguments with array gaps: e is 4");
            assert.areEqual(undefined, f, "Spreading nested call arguments with array gaps: f is undefined");
            assert.areEqual(undefined, g, "Spreading nested call arguments with array gaps: g is undefined");
            assert.areEqual(8,         h, "Spreading nested call arguments with array gaps: h is 8");
        }
        spreadValid2(...[4, , ...[, 8]]);
    }
  },
  {
    name: "Testing spread with string literals",
    body: function () {
      assert.areEqual(["s", "t", "r", "i", "n", "g"], [..."string"], "Spreading a string creates a character array of the string");
    }
  },
  {
    name: "BLUE 491118: Spread outside of a call or array literal",
    body: function () {
      assert.throws(function () { eval("var a = []; ...a") }, SyntaxError, "Spread outside of a call or array literal");
    }
  },
  {
    name: "BLUE 511620: Calling spread operation inside string template results in crash",
    body: function () {
      function foo(a,b){}
      var demo = "hello";
      assert.throws(function() { eval("var strAdd = foo`${...demo}`;"); }, SyntaxError, "Spread inside string template");
    }
  },
  {
    name: "BLUE 490915: ... is a valid operator but ...... (2 spreads combined) is not",
    body: function () {
      assert.throws(function () { eval("var a = []; [......a];") }, SyntaxError, "Two spreads combined is a syntax error");
      assert.throws(function () { eval("function foo(){};var a = []; foo(......a);") }, SyntaxError, "Two spreads combined is a syntax error");
    }
  },
  {
    name: "BLUE 522366: Spreading null or undefined should throw TypeError instead of RuntimeError",
    body: function () {
      function foo(bar) { return bar; }
      assert.throws(function () { foo(...null); }, TypeError);
      assert.throws(function () { [...null]; }, TypeError);
      assert.throws(function () { foo(...undefined); }, TypeError);
      assert.throws(function () { [...undefined]; }, TypeError);
    }
  },
  {
    name: "BLUE 522630: Assignment expresion should be evaluated fisrt and then the results should be spread",
    body: function () {
      let b = { get x() { return "abc"; } }
      a = [1, ...b.x + ""];
      assert.areEqual([1,"a","b","c"], a);
    }
  },
  {
    name: "Spread functionality in non-standard call types",
    body: function () {
      var shortArray = [1,2,3]; 
      var longArray = [5,3,8,2,4,8,5,3,1,912341234,33543,12987,3476,-2134124,3245235]; 

      
      assert.areEqual(shortArray, new Array(...shortArray));
      assert.areEqual(longArray, new Array(...longArray));

      function Storage(a,b,c,d,e,f,g,h,i) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = f;
        this.g = g;
        this.h = h;
        this.i = i;
      }

      assert.areEqual(new Storage(1,2,3), new Storage(...shortArray));
      assert.areEqual(new Storage(5,3,8,2,4,8,5,3,1), new Storage(...longArray));

      
      assert.areEqual("hello", eval(...['"hello"']));
      assert.areEqual(longArray[0], eval(...longArray));
    }
  },
  {
    name: "BLUE: 521584:[ES6][Spread] - Spread inside eval is considered valid without quotes. Currently crashes",
    body: function () {
      assert.areEqual(undefined, eval(...[]));
      assert.areEqual(undefined, eval(...[], ...[]));
      assert.areEqual(undefined, eval(...[], ...[], ...[]));
      assert.areEqual(undefined, eval(...[], ...[], ...[], ...[]));
      assert.areEqual(123123,    eval(...[], ...["123123"]));
      assert.areEqual(123123,    eval(...[], ...["123123"], ...[]));
      assert.areEqual(123123,    eval(...[], ...[], ...["123123"], ...[]));
      assert.areEqual(123123,    eval(...[], ...[], ...[], ...[], ...["123123"]));
      assert.areEqual(123123,    eval(...["123123"], ...[], ...[], ...[], ...[]));
      assert.areEqual(undefined, eval.call(...[]));
      assert.areEqual(undefined, eval.call(...[], ...["123123"]));
    }
  },
  {
    name: "Spread with side effects",
    body: function () {
      var i = 0;
      eval(...["i++"]);
      assert.areEqual(1, i);
      eval(...[], ...["i += 1"]);
      assert.areEqual(2, i);
      eval(...[], ...["i = i - i"], ...[]);
      assert.areEqual(0, i);
    }
  },
  {
    name: "BLUE 584814: Instr::HasFixedFunctionAddressTarget() assertion",
    body: function () {
      function badFunc() {
        function shapeyConstructor(iijcze) {
          if (((NaN += /x/).b)) iijcze.d = (new((4277))(new[1, , ](/x/, ''), ...y));
        }
        for (var z in [/x/, /x/, true, ]) {
                let drjotv = shapeyConstructor(z);
        }
      }
      badFunc(); badFunc();
    }
  },
  {
    name: "BLUE 582720: Spread calls with invalid functions crash in native",
    body: function () {
      function badFunc() {
        (12345)(...[]);
      }
      assert.throws(function () { badFunc(); badFunc(); });
    }
  },
  {
    name: "BLUE 589583: CallIPut with spread causes an assert",
    body: function () {
      function a() {};
      var x = [];
      assert.throws(function() { eval('a(...x)--'); }, ReferenceError, "Spread with CallIPut throws a ReferenceError");
    }
  },

  {
    name: "MSRC 34309: Guard against getter in prototype",
    body: function () {
        var x = [0x40];
        x.length = 0x9;
        
        Object.defineProperty(Array.prototype, 1, {
            get: function() {
                x.length = 0;
            },
            configurable: true
        });

        var f = function(){
            assert.areEqual(arguments.length, 2, "Changing length of x during spreading should truncate the spread.");
        }
        f(...x);
        delete Array.prototype[1];
    }
  },
  {
    name: "BLUE 611774: Spread with a prefix operator is allowed anywhere",
    body: function () {
      assert.throws(function () { eval('++...window, z;'); }, SyntaxError, "Invalid use of the ... operator");
    }
  },
  {
    name: "OS 5204357: Corner case: user changes %ArrayIteratorPrototype%.next property and we should call it",
    body: function () {
      var overrideCalled = false;
      var arrayIteratorProto = Object.getPrototypeOf([][Symbol.iterator]());
      var arrayIteratorProtoNext = arrayIteratorProto.next;

      function testArrayIteratorProto() {
        var a = [1];
        function f() {}
        f(...a);
        assert.isTrue(overrideCalled, "Spread of a in call to f should have invoked the overridden %ArrayIteratorPrototype%.next method");
        overrideCalled = false;

        var b = [...a];
        assert.isTrue(overrideCalled, "Spread of a in array initializer should have invoked the overridden %ArrayIteratorPrototype%.next method");
        overrideCalled = false;
      }
      
      var overrideFunc = function () {
        overrideCalled = true;
        return arrayIteratorProtoNext.apply(this, arguments);
      };
      
      arrayIteratorProto.next = overrideFunc;
      testArrayIteratorProto();
      
      arrayIteratorProto.next = arrayIteratorProtoNext;

      function getIterableObjNextDesc() {
        return  {
          get: function next() {
            overrideCalled = true;
              return function () {
                return {
                  value: 0,
                  done:  1
                };
              };
          }
        };
      }

      
      var builtinArrayPrototypeIteratorNextDesc = Object.getOwnPropertyDescriptor(arrayIteratorProto, "next"); 
      Object.defineProperty(arrayIteratorProto, "next", getIterableObjNextDesc()); 
      testArrayIteratorProto();
      Object.defineProperty(arrayIteratorProto, "next", builtinArrayPrototypeIteratorNextDesc); 
    }
  },
  {
    name: "Corner case: Spread of an array with an accessor property (ES5Array) should call that getter and recognize a change in length during iteration",
    body: function () {
      var result = [];
      function foo(a, b, c, d) {
          result.push(a);
          result.push(b);
          result.push(c);
          result.push(d);
      }

      var a = [5, 6, 7];
      a.two = 7;
      Object.defineProperty(a, '2', { get: function () { this[3] = 8; return this.two; } });
      foo(...a);

      assert.areEqual(4, result.length, "Spread for the function argument called the getter and caused the length to be updated to four");
      assert.areEqual(5, result[0], "Spread for the function argument passed the first element of a as the first argument");
      assert.areEqual(6, result[1], "Spread for the function argument passed the second element of a as the second argument");
      assert.areEqual(7, result[2], "Spread for the function argument called the getter of the third element of a and passed the result as the third argument");
      assert.areEqual(8, result[3], "Spread for the function argument recognized the new length of four and passed the fourth element of a as the fourth argument");

      a = [5, 6, 7];
      a.two = 7;
      Object.defineProperty(a, '2', { get: function () { this[3] = 8; return this.two; } });
      var b = [...a];
      result = b;

      assert.areEqual(4, result.length, "Spread for the array initializer called the getter and caused the length to be updated to four");
      assert.areEqual(5, result[0], "Spread for the array initializer copied the first element of a to the first element of b");
      assert.areEqual(6, result[1], "Spread for the array initializer copied the second element of a to the second element of b");
      assert.areEqual(7, result[2], "Spread for the array initializer called the getter of the third element of a and copied the result to the third element of b");
      assert.areEqual(8, result[3], "Spread for the array initializer recognized the new length of four and copied the fourth element of a to the fourth element of b");
    }
  },
  {
    name: "Corner case: Spread of an arguments object with an accessor property (ES5HeapArgumentsObject) should call that getter and recognize a change in length during iteration",
    body: function () {
      var result = [];
      function foo(a, b, c, d) {
          result.push(a);
          result.push(b);
          result.push(c);
          result.push(d);
      }

      function bar() {
        arguments.two = 7;
        
        
        Object.defineProperty(arguments, '2', { get: function () { this[3] = 8; this.length++; return this.two; } });
        foo(...arguments);
      }
      bar(5, 6, 7);

      assert.areEqual(4, result.length, "Spread for the function argument called the getter and caused the length to be updated to four");
      assert.areEqual(5, result[0], "Spread for the function argument passed the first element of a as the first argument");
      assert.areEqual(6, result[1], "Spread for the function argument passed the second element of a as the second argument");
      assert.areEqual(7, result[2], "Spread for the function argument called the getter of the third element of a and passed the result as the third argument");
      assert.areEqual(8, result[3], "Spread for the function argument recognized the new length of four and passed the fourth element of a as the fourth argument");

      result = [];

      function fuz() {
        arguments.two = 7;
        
        
        Object.defineProperty(arguments, '2', { get: function () { this[3] = 8; this.length++; return this.two; } });
        var b = [...arguments];
        result = b;
      }
      fuz(5, 6, 7);

      assert.areEqual(4, result.length, "Spread for the array initializer called the getter and caused the length to be updated to four");
      assert.areEqual(5, result[0], "Spread for the array initializer copied the first element of a to the first element of b");
      assert.areEqual(6, result[1], "Spread for the array initializer copied the second element of a to the second element of b");
      assert.areEqual(7, result[2], "Spread for the array initializer called the getter of the third element of a and copied the result to the third element of b");
      assert.areEqual(8, result[3], "Spread for the array initializer recognized the new length of four and copied the fourth element of a to the fourth element of b");
    }
  },
  {
    name: "OS 2970825: Spread should not be allowed with unary operators",
    body: function () {
      function foo() {}
      assert.throws(function () { eval("foo(++...[1,2,3]);"); },      SyntaxError, "Spread with unary operator throws a syntax error",          "Unexpected ... operator");
      assert.throws(function () { eval("foo(typeof ...[1,2,3]);"); }, SyntaxError, "Spread with keyword unary operator throws a syntax error",  "Unexpected ... operator");
      assert.throws(function () { eval("foo(!!...[1,2,3]);"); },      SyntaxError, "Spread with chained unary operators throws a syntax error", "Unexpected ... operator");
    }
  },
  {
    name: "call scenario - second spread is changing the first spread's length",
    body: function () {
        function foo() {
            var args = [...arguments];
            assert.areEqual([101, 102, 201], args, "2 values from the first spread and 1 value from the second spread is expected");
        }
        
        var first = [101, 102];
        
        var obj = {};
        Object.defineProperty(obj, '2', {get : function() {
            assert.fail('this should not have called')
            return 103;
        }});

        var second = [];
        second.length = 1;
        var getterCalled = false;
        Object.defineProperty(second, '0', {get : function() {
            
            first.__proto__ = obj;
            first.length = 3;
            getterCalled = true;
            return 201;
        }});

        foo(...first, ...second);
        assert.isTrue(getterCalled, "getter of the second spread is executed");
    }
  },
  {
    name: "array scenario - second spread is changing the first spread's length",
    body: function () {
        
        var first = [101, 102];
        
        var obj = {};
        Object.defineProperty(obj, '2', {get : function() {
            assert.fail('this should not have called')
            return 103;
        }});

        var second = [];
        second.length = 1;
        var getterCalled = false;
        Object.defineProperty(second, '0', {get : function() {
            
            first.__proto__ = obj;
            first.length = 3;
            getterCalled = true;
            return 201;
        }});

        var result = [...first, ...second];
        assert.areEqual([101, 102, 201], result, "2 values from the first spread and 1 value from the second spread is expected");
        assert.isTrue(getterCalled, "getter of the second spread is executed");
    }
  },
  {
    name: "typedarray scenario - second spread is changing value of first spread which is a typedarray",
    body: function () {
        
        var first = new Uint32Array([101, 102]);
        
        var second = [];
        second.length = 1;
        var getterCalled = false;
        Object.defineProperty(second, '0', {get : function() {
            
            first[0] = 11; 
            getterCalled = true;
            return 201;
        }});

        var result = [...first, ...second];
        assert.areEqual([101, 102, 201], result, "2 values from the first spread and 1 value from the second spread is expected");
        assert.isTrue(getterCalled, "getter of the second spread is executed");
    }
  }
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
