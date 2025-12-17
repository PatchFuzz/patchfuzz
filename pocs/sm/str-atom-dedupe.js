var latin1S = "foo".repeat(50);
var obj = {};
obj[latin1S] = 3;
print(obj[latin1S], 3);


var twoByteS = newString(latin1S, {twoByte: true});
print(obj[twoByteS], 3);


var depTwoByteS = twoByteS.slice(1);


minorgc();
print(obj["f" + depTwoByteS], 3);
