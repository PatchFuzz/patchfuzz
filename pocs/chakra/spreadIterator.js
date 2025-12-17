print("..\\UnitTestFramework\\UnitTestFramework.js");

var emptyIterator  = function(){ return {next: function () { return { done: true, value: 0};}}}
var simpleIterator = function(args) {
     var iter = (function(args) {
     var j = 0;
     var length = args.length;
     return function Iterator() {
     return {next: function() {

        if (j < length)
        {
            return { value: args[j++], done: false };
        }
        else
        {
            j = 0;
            return { done: true };
        }
     }}}})(args)
     return iter;};

function __createIterableObject(a, b, c) {
        if (typeof Symbol === "function" && Symbol.iterator) {
          var arr = [a, b, c, ,];
          var iterable = {
            next: function() {
              return { value: arr.shift(), done: arr.length <= 0 };
            },
          };
          iterable[Symbol.iterator] = function(){ return iterable; }
          return iterable;
        }
        else {
          return eval("(function*() { yield a; yield b; yield c; }())");
        }
      }

var tests = [
   {
       name: "Spread TypeError: Function expected",
       body: function ()
       {
             var a = [1, 2];
             a[Symbol.iterator] = 0;
             print(function () { var b = [...1]; }, TypeError, "1 is not iterable", "Function expected");
             print(function () { var b = [...a]; }, TypeError, "Spread when the iterator is not a function", "Function expected");
             var noNextIterator = function(){ return {done: true, value: 0};}
             a[Symbol.iterator] = noNextIterator;
             print(function () { var b = [...a]; }, TypeError, "Spread when the iterator does not have a next is not valid", "Function expected");
             a = function() {}
             print(function () { var b = [...a]; }, TypeError, "Spread when the iterator is not a function", "Function expected");
             a = {}
             print(function () { var b = [...a]; }, TypeError, "Spread when the iterator is not a function", "Function expected");
             a =  /r/g;
             print(function () { var b = [...a]; }, TypeError, "Spread when the iterator is not a function", "Function expected");
       }
   },
   {
       name: "Kangax Tests",
       body: function ()
       {
             print("𠮷", Array(..."𠮷")[0]);
             print("a", Array(..."a")[0]);

             print("𠮷", [..."𠮷"][0]);
             print("a", [..."a" ][0]);

             var iterableNum = __createIterableObject(1, 2, 3);
             
             print(3, Math.max(...iterableNum));
             var iterableStr = __createIterableObject("b", "c", "d");
             print("d", ["a", ...iterableStr, "e"][3]);
             
       }
   },
   {
       name: "Spread TypeError: Object expected",
       body: function ()
       {
             var a = [1, 2];
             a[Symbol.iterator] = function() {};
             print(function () { var b = [...a]; }, TypeError, "the @@iterator function should return an Object", "Object expected");
       }
   },
   {
       name: "A spread argument's @@iterator has changed",
       body: function ()
       {
             var a = [1, 2];
             var c = [4, 5];
             count = 0;
             a[Symbol.iterator] = function() {
             return { next: function() {
                if (count < 3)
                {
                    return { value: count++, done: false };
                }
                else
                {
                    return { done: true };
                }
             }};};

             var result = [-1,0,1,2,3,4,5,6];
             var b = [-1,...a,3,...c,6]
             print(result,b, "confirm only a spreads with a counting iterator");

             print(3,count,"confirm side effect of incrementing count equals the number we expect");

             c[Symbol.iterator] = simpleIterator(c);
             count = 0;
             var b = [-1,...a,3,...c,6];
             print(result,b, "confirm both a and c spread, with c using  an iterator that increments c's array");
       }
   },
         {
       name: "Array Spread Iterator causes parameter side effects",
       body: function ()
       {
            var a = [1,2];
            var b = 4
            var c = { 0 : false };
            var d = "foo";
            var e = function foo() {}
            var simpleIteratorWithParamSideEffect = function(args) {
                var iter = (function(args) {
                var j = 0;
                var length = args.length;
                return function Iterator() {
                b = 5;
                c[0] = true;
                d = "bar";
                e = function goo() {}
                return {next: function() {

                if (j < length)
                {
                    return { value: args[j++], done: false };
                }
                else
                {
                    j = 0;
                    return { done: true };
                }
                }}}})(args)
                return iter;};

            a[Symbol.iterator] = simpleIteratorWithParamSideEffect(a);

            var result = [...a,b,c,d,e];

            print(1,result[0]);
            print(2,result[1]);
            print(5,result[2]);
            print(true,result[3][0]);
            print("bar",result[4]);
            print("goo",result[5].name);
       }
   },
   {
       name: "Spread with String iterators",
       body: function ()
       {
             var a = "foobar";
             var b = [1,2,...a,4];
             var results = [1,2,'f','o','o','b','a','r',4];
             print(results,b, "confirm we can spread strings");

             var aa = new String(a);
             aa[Symbol.iterator] = simpleIterator(aa);
             var b = [1,2,...aa,4];
             print(results,b, "override the string iterator with a custom iterator that emulates the built in iterator");
             aa[Symbol.iterator] = emptyIterator;
             var b = [1,2,...aa,4];
             print([1,2,4],b,  "override the string iterator with an empty iterator");
       }
   },
   {
       name: "Spread with typedArray iterators",
       body: function ()
       {
             var buf = [2, 3, 4, 5];
             var typedArrays = [new Int8Array(buf), new Uint8Array(buf), new Uint8ClampedArray(buf), new Uint16Array(buf),
                                new Int16Array(buf), new Int32Array(buf), new Uint32Array(buf), new Float32Array(buf),
                                new Float64Array(buf)];
             for(var i = 0; i < typedArrays.length;i++)
             {
                var a = typedArrays[i];
                var b = [1,...a,6];
                var results = [1,...buf,6];
                print(results,b, "confirm TypedArrays still spread");

                a[Symbol.iterator] = simpleIterator(a);
                var b = [1,...a,6];
                print(results,b, "force typed arrays to use a user defined iterator that emulates the buitin iterator behavior");
                a[Symbol.iterator] = emptyIterator;
                var b = [1,...a,6];
                print([1,6],b, " make typed arrays use an empty iterator");
             }
       }
   },
   {
       name: "Spread with Maps & Sets",
       body: function ()
       {
             var kvArray = [["one", 1], ["two", 2]];
             var myMap = new Map(kvArray);
             var b = [0,...myMap];
             print([0,["one", 1], ["two", 2]],b);

             var mapIter = myMap.keys();
             var b = [0,...mapIter];
             print([0, "one", "two"],b,"should show 0 and then myMap's keys");

             var mapIter = myMap.values();
             var b = [0,...mapIter];
             print([0, 1, 2],b,"should show 0 and then myMap's keys");

             var aSet = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
             var b = [0,...aSet, 6];
             print([0,1,2,3,4,5, 6],b);
       }
   },
   {
       name: "Spread with Objects",
       body: function ()
       {
             var obj = { 0 : 1, 1: 1, 2 : 1, 3 : 1, length : 4}
             print(function () { var b = [...obj]; }, TypeError, "Spread is no longer dependent on length", "Function expected");
             obj[Symbol.iterator] = simpleIterator(obj);
             var b = [...obj];
             print([1,1,1,1],b);
       }
   },
   {
       name: "Spread with WeakMaps & WeakSets",
       body: function ()
       {
             var kvArray = [[{animal: "dog"},"foo" ], [{animal: "cat"},"bar" ]];
             var myMap = new WeakMap(kvArray);
             myMap[Symbol.iterator] = emptyIterator;
             var b = [0,...myMap];
             print([0],b, "confirm any object can spread as long as it has an iterator");

             var aSet = new WeakSet([{},{},{},[4], [5], [5], [5], [5]]);
             aSet[Symbol.iterator] = emptyIterator;
             var b = [0,...aSet, 6];
             print([0,6],b,"confirm any object can spread as long as it has an iterator");
       }
   },
   {
       name: "Spread with arguments",
       body: function ()
       {
             var b = [];
             function bar(a,a){b = [...arguments];}
             bar([1],[2]);
             print([[1],[2]], b);
             class d { constructor() {arguments[Symbol.iterator] = simpleIterator(arguments); b = [...arguments]; } };
             new d(1,2,3);
             print([1,2,3],b, "confirm we can override the built iterator");
             new d();
             print([],b);
             function foo(a, b, c, ...rest) { return [a, b, c, ...rest]; }
             b= foo(1,2,3,4,5,6)
             print([1,2,3,4,5,6],b);
             b = foo(1,2,3);
             print([1,2,3],b);
             b = foo(1,2);
             print([1,2,undefined],b);

       }
   },
   {
       name: "Function Spread with typedArray iterators",
       body: function ()
       {
             var buf = [2, 3, 4];

             function test1(a,b,c,d,e)
             {
                var expected = [a, ...buf, e];
                var results  = [a,b,c,d,e];
                print(results,expected, "confirm TypedArrays still spread");
             }
             function test2(a,b,c,d,e)
             {
                print(1,a, "should be nonspreadable numeric primitive 1");
                print(5,b, "should be nonspreadable numeric primitive 5");
                print(undefined,c);
                print(undefined,d);
                print(undefined,e);
             }

             var typedArrays = [new Int8Array(buf), new Uint8Array(buf), new Uint8ClampedArray(buf), new Uint16Array(buf),
                                new Int16Array(buf), new Int32Array(buf), new Uint32Array(buf), new Float32Array(buf),
                                new Float64Array(buf)];
             for(var i = 0; i < typedArrays.length;i++)
             {
                var a = typedArrays[i];
                test1(1,...a,5);

                a[Symbol.iterator] = simpleIterator(a);
                test1(1,...a,5);

                a[Symbol.iterator] = emptyIterator;
                test2(1,...a,5);
             }
       }
   },
   {
       name: "Function Spread TypeError: Function expected",
       body: function ()
       {
            var a = [1,2,3];
            a[Symbol.iterator] = 0;
            function f(z,...v) {}
             print(function () { f(0,...a); }, TypeError, "Spread when the iterator is not a function", "Function expected");
             var noNextIterator = function(){ return {done: true, value: 0};}
             a[Symbol.iterator] = noNextIterator;
             print(function () { f(0,...a); }, TypeError, "Spread when the iterator does not have a next is not valid", "Function expected");
             a = function() {}
             print(function () { f(0,...a); }, TypeError, "Spread when the iterator is not a function", "Function expected");
             a = {}
             print(function () { f(0,...a); }, TypeError, "Spread when the iterator is not a function", "Function expected");
             a =  /r/g;
             print(function () { f(0,...a); }, TypeError, "Spread when the iterator is not a function", "Function expected");
             var b = 11;
             print(function () { f(0,...b); }, TypeError, "b is a primitive and thus is not iterable", "Function expected");
       }
   },
   {
       name: "Function Spread TypeError: Object expected",
       body: function ()
       {
             var a = [1, 2];
             a[Symbol.iterator] = function() {};
             function f(z,v) {}
             print(function () { f(0,...a); }, TypeError, "the @@iterator function should return an Object", "Object expected");

       }
   },

   {
       name: "Function Spread Iterator with Arguments",
       body: function ()
       {
             
             class base {}
             class child extends base {}
             print(function () { var o = new child(); }, "we should not, get a type Error, arguments has an iterator");

             var a = [1];
             var b = 'a';
             var c = new Set([1,1,1,1]);

             function test(a,b,c)
             {
                print([1], a);
                print('a', b);
                print([1], [...c]);
             }
             class child2 extends base {
             constructor(a,b,c) {
               super(...arguments);
               test(...arguments);
               }};
             var o = new child2(a, b, c);
             class child3 extends base {
             constructor(a,b,c) {
               arguments[Symbol.iterator] = simpleIterator(arguments);
               super(...arguments);
               test(...arguments);
               }};
             var o = new child3(a, b, c);
       }
   },
   {
       name: "Function Spread Iterator override for all objects",
       body: function ()
       {
             var a = new String("fox");
             var b = [1,2,3];
             var c = {0 : 1, 1 : 2, 2 : 3, length : 3};
             a[Symbol.iterator] = simpleIterator(a);
             b[Symbol.iterator] = simpleIterator(b);
             c[Symbol.iterator] = simpleIterator(c);
             function f(a, b, c, d, e, f, w, x, y, z)
             {
                print('f',a, "should be value at global string a[0]");
                print('o',b, "should be value at global string a[1]");
                print('x',c, "should be value at global string a[2]");
                print(1,d, "should be value at global array b[0]");
                print(2,e, "should be value at global array b[1]");
                print(3,f, "should be value at global array b[2]");
                print(1,w, "should be value at global object c[0]");
                print(2,x, "should be value at global object c[1]");
                print(3,y, "should be value at global object c[2]");
                print(4,z, "should be nonspreadable numeric primitive 4");

             }
             f(...a, ...b, ...c, 4);
             function d(a, b, c, d, e, f, w, x, y, z)
             {
                print(4,a, "should be nonspreadable numeric primitive 4");
                print(undefined,b);
                print(undefined,c);
                print(undefined,d);
                print(undefined,e);
                print(undefined,f);
                print(undefined,w);
                print(undefined,x);
                print(undefined,y);
                print(undefined,z);

             }
             a[Symbol.iterator] = emptyIterator;
             b[Symbol.iterator] = emptyIterator;
             c[Symbol.iterator] = emptyIterator;
             d(...a, ...b, ...c, 4);
       }
   },
   {
       name: "Function Spread Iterator causes parameter side effects",
       body: function ()
       {
            var a = [1,2];
            var b = [4,5];
            var c = [7,8];
            var simpleIteratorWithParamSideEffect = function(args) {
                var iter = (function(args) {
                var j = 0;
                var length = args.length;
                return function Iterator() {
                c[Symbol.iterator] = emptyIterator;
                a[Symbol.iterator] = emptyIterator;
                return {next: function() {

                if (j < length)
                {
                    return { value: args[j++], done: false };
                }
                else
                {
                    j = 0;
                    return { done: true };
                }
                }}}})(args)
                return iter;};

            b[Symbol.iterator] = simpleIteratorWithParamSideEffect(b);
            function test(a,b,c,d,e,f)
            {
                print(1,a, "iterator side effect on array 'a' happens after spreading 'a'");
                print(2,b, "iterator side effect on array 'a' happens after spreading 'a'");
                print(4,c);
                print(5,d);
                print(undefined,e,"iterator side effect on array 'c' happens before spreading 'c'");
                print(undefined,f,"iterator side effect on array 'c' happens before spreading 'c'");
            }

            test(...a,...b,...c);
       }
   },
      {
       name: "Function Spread Iterator causes parameter side effects",
       body: function ()
       {
            var a = [1,2];
            var b = 4
            var c = { 0 : false };
            var d = "foo";
            var e = function foo() {}
            var simpleIteratorWithParamSideEffect = function(args) {
                var iter = (function(args) {
                var j = 0;
                var length = args.length;
                return function Iterator() {
                b = 5;
                c[0] = true;
                d = "bar";
                e = function goo() {}
                return {next: function() {

                if (j < length)
                {
                    return { value: args[j++], done: false };
                }
                else
                {
                    j = 0;
                    return { done: true };
                }
                }}}})(args)
                return iter;};

            a[Symbol.iterator] = simpleIteratorWithParamSideEffect(a);
            function test(a,b,c,d,e,f)
            {
                print(1,a, "iterator side effect on array 'a' happens after spreading 'a'");
                print(2,b, "iterator side effect on array 'a' happens after spreading 'a'");
                print(5,c);
                print(true,d[0]);
                print("bar",e);
                print("goo",f.name);
            }

            test(...a,b,c,d,e);
       }
   },
   {
       name: "Function Spread Iterator override for  some objects",
       body: function ()
       {
             var a = new String("fox");
             var b = [1,2,3];
             var c = {0 : 1, 1 : 2, 2 : 3, length : 3};
             a[Symbol.iterator] = simpleIterator(a);
             c[Symbol.iterator] = simpleIterator(c);
             function f(a, b, c, d, e, f, w, x, y, z)
             {
                print('f',a, "should be value at global string a[0]");
                print('o',b, "should be value at global string a[1]");
                print('x',c, "should be value at global string a[2]");
                print(1,d, "should be value at global array b[0]");
                print(2,e, "should be value at global array b[1]");
                print(3,f, "should be value at global array b[2]");
                print(1,w, "should be value at global object c[0]");
                print(2,x, "should be value at global object c[1]");
                print(3,y, "should be value at global object c[2]");
                print(4,z, "should be nonspreadable numeric primitive 4");

             }
             f(...a, ...b, ...c, 4);

             function d(a, b, c, d, e, f, w, x, y, z)
             {
                print(1,a, "should be value at global array b[0]");
                print(2,b, "should be value at global array b[1]");
                print(3,c, "should be value at global array b[2]");
                print(4,d, "should be nonspreadable numeric primitive 4");
                print(undefined,e);
                print(undefined,f);
                print(undefined,w);
                print(undefined,x);
                print(undefined,y);
                print(undefined,z);
             }
             a[Symbol.iterator] = emptyIterator;
             c[Symbol.iterator] = emptyIterator;
             d(...a, ...b, ...c, 4);
       }
   }

];
for (var i = 0; i < tests.length; i ++) {tests[i].body()}
