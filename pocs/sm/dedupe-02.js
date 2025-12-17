gczeal(0);

function makeExtensibleStrFrom(str) {
  var left = str.substr(0, str.length/2);
  var right = str.substr(str.length/2, str.length);
  var ropeStr = left + right;
  return ensureLinearString(ropeStr);
}


var original = makeExtensibleStrFrom('{ "phbbbbbbbbbbbbbbttt!!!!??": [1] }\n\n');


var D2 = makeExtensibleStrFrom('{ "phbbbbbbbbbbbbbbttt!!!!??": [1] }');
var D1 = newRope(D2, '\n', {nursery: true});
ensureLinearString(D1);
var base = newRope(D1, '\n', {nursery: true});
ensureLinearString(base);









JSON.parse(D2);



schedulegc(1);
JSON.parse(D2);


print(D2);
