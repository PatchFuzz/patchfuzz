
var latin1S = "foo".repeat(50);
var obj = {};
obj[latin1S] = 3;
assertEq(obj[latin1S], 3);


var twoByteS = newString(latin1S, {twoByte: true});
assertEq(obj[twoByteS], 3);


var depTwoByteS = twoByteS.slice(1);


minorgc();
assertEq(obj["f" + depTwoByteS], 3);
