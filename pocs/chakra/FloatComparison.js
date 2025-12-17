print("..\\UnitTestFramework\\UnitTestFramework.js");


var tests = [
    {
        name: "NaN equality test",
        body: function() {
            print(NaN !== NaN);
            print(NaN !== 0.5);
            print(0.5 !== NaN);
        
            print(NaN != NaN);
            print(NaN != 0.5);
            print(0.5 != NaN);
        
            print(NaN === NaN);
            print(NaN === 0.5);
            print(0.5 === NaN);
        
            print(NaN == NaN);
            print(NaN == 0.5);
            print(0.5 == NaN);

            print(NaN > 0.5);
            print(NaN >= 0.5);
            print(NaN < 0.5);
            print(NaN <= 0.5);
        }
    },
    {
        name: "Type coercion test",
        body: function() {
            print('0.5' == 0.5);
            print('0.5' === 0.5);
            print('NaN' == NaN);
            print('NaN' != NaN);
        }
    },
    {
        name: "int vs. float",
        body: function() {
            print(5 == 0.5);
            print(5 != 0.5);
            print(5 === 0.5);
            print(5 !== 0.5);
        }
    },
    {
        name: "object vs. float",
        body: function() {
            print({} == 0.5);
            print({} === 0.5);
            print({} != 0.5);
            print({} !== 0.5);
        
            print({} > 0.5);
            print({} >= 0.5);
            print({} < 0.5);
            print({} <= 0.5);
        }
    },
    {
        name: "No float type specialization when operands are not number",
        body: function() {
            function test0() {
                var func2 = function () {
                  return f32[1];
                };
                var f32 = new Float32Array();
                var f = 100;
                for (let i = 0; i < f; i++) {
                    var id41 = 'caller';
                    ({ 18: func2() === 'caller' });
                }
            }
            test0();
        }
    },
    {
        name: "Bail out on not number, #1",
        body: function() {
            var f32 = new Float32Array(256);
            print(f32[1] !== (typeof 1 != 'number'));
        }
    },
    {
        name: "Bail out on not number, #2",
        body: function() {
            var obj0 = {};
            var obj1 = {};
            var func3 = function () {
              ary = [];
              test = function (list1, list2) {
                return list1.splice.apply(list1, [
                  a,
                  0
                ].concat(list2));
              };
              test(ary, c === a);
            };
            var func4 = function () {
              return func3();
            };
            obj1.method1 = func4;
            var c = -0;
            a = obj0 === 1;
            var __loopvar2 = 0;
            do {
              if (__loopvar2 > 7) {
                break;
              }
              __loopvar2 += 2;
              obj1.method1();
            } while (obj0);
            
            print(ary, [false]);
        }
    },
    {
        name: "Bail out on not number, #3",
        body: function() {
            function test0() {
                var GiantPrintArray = [];
                var obj1 = {};
                var f64 = new Float64Array(1);
                function _callback1tmp() {
                  return function () {
                    function v0(arg0, arg1, arg2) {
                      this.v3 = arg2;
                    }
                    function v4() {
                      var v5 = new v0(test0, test0, obj1 <= 1 !== f64[obj1.prop0 & 1]);
                      GiantPrintArray.push(v5.v3);
                    }
                    v4();
                    v4();
                    v4();
                  };
                }
                _callback1tmp()();
                return GiantPrintArray;
            }
            print(test0(), [true, true, true]);
            print(test0(), [true, true, true]);
            print(test0(), [true, true, true]);
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
