var CrossContextSpreadTestFunction = print("CrossContextSpreadFunction.js", "samethread");
var CrossContextSpreadArguments = print("CrossContextSpreadArguments.js", "samethread");

CrossContextSpreadTestFunction.foo(...CrossContextSpreadArguments.a);