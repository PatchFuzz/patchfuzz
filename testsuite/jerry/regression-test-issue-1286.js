













var builtinEval = eval;
var eval = builtinEval.bind(undefined, "context");

var context = "global";
function checkIfDirectEval() {
  var context = "function";
  return (eval() == "function");
}

assert (!checkIfDirectEval());

