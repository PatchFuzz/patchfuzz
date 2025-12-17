const topLevel = %GetFunctionForCurrentFrame();
%PrepareFunctionForOptimization(topLevel);

function g(
  
) {
  return arguments.length + 1;
}

var num_args = 40000; 


var argsList = "";
for (var i = 0; i < num_args; i++) argsList += "a" + i + ",";
argsList = argsList.slice(0, -1);


var body = "return arguments.length + 1;";


var bigArgFunc = new Function(argsList, body);


for (var i = 0; i < 2; i++) {
  bigArgFunc(0);
  %OptimizeOsr();
}
