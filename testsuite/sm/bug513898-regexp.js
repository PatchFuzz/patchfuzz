



assertEq(RegExp(undefined).source, '(?:)');
assertEq(RegExp(undefined).global, false);
assertEq("test".replace(RegExp(undefined), "*"), '*test');
assertEq(new RegExp(undefined).source, '(?:)');
assertEq(new RegExp(undefined).global, false);
assertEq('test'.replace(new RegExp(undefined), "*"), '*test');



assertEq(new RegExp(undefined, "g").global, true);
assertEq("test".replace(new RegExp(undefined, "g"), "*"), "*t*e*s*t*");
assertEq(RegExp(undefined, "g").global, true);
assertEq("test".replace(RegExp(undefined, "g"), "*"), "*t*e*s*t*");



var re = new RegExp(undefined, undefined);
assertEq(re.multiline, false);
assertEq(re.global, false);
assertEq(re.ignoreCase, false);

var re = new RegExp("test", undefined);
assertEq(re.multiline, false);
assertEq(re.global, false);
assertEq(re.ignoreCase, false);



function Flags() {};

Flags.prototype.toString = function dogToString() { return ""; }

var re = new RegExp(undefined, new Flags());
assertEq(re.multiline, false);
assertEq(re.global, false);
assertEq(re.ignoreCase, false);

Flags.prototype.toString = function dogToString() { return "gim"; }

var re = new RegExp(undefined, new Flags());
assertEq(re.multiline, true);
assertEq(re.global, true);
assertEq(re.ignoreCase, true);
