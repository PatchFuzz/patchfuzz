




var CrossContextSpreadTestFunction = this.WScript.LoadScriptFile("CrossContextSpreadFunction.js", "samethread");
var CrossContextSpreadArguments = this.WScript.LoadScriptFile("CrossContextSpreadArguments.js", "samethread");

CrossContextSpreadTestFunction.foo(...CrossContextSpreadArguments.a);