var g = newGlobal({ newCompartment: true });
g.eval(`
let counter = 10;

function func1() {
  var local1 = counter;

  var func2 = function f2() {
    var local2 = counter;

    var func3 = function f3() {
      var local3 = counter;

      var func4 = function f4() {
        var local4 = counter;

        
        
        var x = [local1, local2, local3];

        counter++;

        debugger;
      };

      func4();
    };

    func3();
  };

  func2();
};
`);

var dbg = new Debugger(g);

var result = null;

dbg.onDebuggerStatement = function handleDebuggerStatement(f) {
  result = {
    local1: f.eval("local1").return,
    local2: f.eval("local2").return,
    local3: f.eval("local3").return,
    local4: f.eval("local4").return,
  };
};

g.eval('func1()');



print(result.local1, 10);
print(result.local2, 10);
print(result.local3, 10);
print(result.local4, 10);

g.eval('func1()');



print(result.local1, 11);
print(result.local2, 11);
print(result.local3, 11);
print(result.local4, 11);
