var x = 1;
function foo() {
  x = 2;
}
print(foo);


var obj = {
  func : function () {
    print('');
  }
};
print(obj.func);

var global = print("function foo(){}", "samethread", "dummyFileName.js");
print(global.foo);

var evalFunc = eval('new Function("a", "b", "    return a + b;")');
print(evalFunc);

function blah() {
  
  var xyz = 1;
}
print(blah);


print(JSON.stringify);
print(eval);

print("pass");
