load(libdir + 'bytecode-cache.js');

let test = `


if (false) {
  "unused text1";
  "unused text2";
  "unused text3";
  "unused text4";
  "unused text5";
}

var result = 0;

function func() {
  var anonFunc = function() {
    
    var obj = {
      method(name) {
        
        var object = {
          propA: 9,
          propB: 10,
          propC: 11,
        };

        
        return object["prop" + name];
      },
      get prop1() {
        return 200;
      },
      set prop2(value) {
        result += value;
      }
    };
    result += obj.prop1;
    obj.prop2 = 3000;
    result += obj.method("B");
  };

  function anotherFunc() {
    return 40000;
  }

  function unused() {
  }

  class MyClass {
    constructor() {
      result += 500000;
    }
  }

  
  const arrow = (a = (b = c => { result += 6000000 }) => b) => a()();

  
  new MyClass();
  anonFunc();
  result += anotherFunc();
  arrow();
}
func();

result;
`;

evalWithCache(test, { incremental: true, oassertEqResult : true });
