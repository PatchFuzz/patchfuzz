




function foo() {
  var x = 1; 
}
foo();

(function () {
  var x = 1; 
})();

var arr = [0];
arr.forEach((s) => {
  var x = 1; 
});

function same(shouldBreak) {
  if (shouldBreak) {
    
    var x = 1; 
  } else {
    same(!shouldBreak);
  }
}
same(false);

function one(arg1) {
  two();
}
function two(arg1, arg2) {
  three();
}
function three(arg1, arg2, arg3) {
  var x = 1; 
}
one();

WScript.Echo("pass");
