print(RegExp(undefined).source, '(?:)');
print(RegExp(undefined).global, false);
print("test".replace(RegExp(undefined), "*"), '*test');
print(new RegExp(undefined).source, '(?:)');
print(new RegExp(undefined).global, false);
print('test'.replace(new RegExp(undefined), "*"), '*test');



print(new RegExp(undefined, "g").global, true);
print("test".replace(new RegExp(undefined, "g"), "*"), "*t*e*s*t*");
print(RegExp(undefined, "g").global, true);
print("test".replace(RegExp(undefined, "g"), "*"), "*t*e*s*t*");



var re = new RegExp(undefined, undefined);
print(re.multiline, false);
print(re.global, false);
print(re.ignoreCase, false);

var re = new RegExp("test", undefined);
print(re.multiline, false);
print(re.global, false);
print(re.ignoreCase, false);



function Flags() {};

Flags.prototype.toString = function dogToString() { return ""; }

var re = new RegExp(undefined, new Flags());
print(re.multiline, false);
print(re.global, false);
print(re.ignoreCase, false);

Flags.prototype.toString = function dogToString() { return "gim"; }

var re = new RegExp(undefined, new Flags());
print(re.multiline, true);
print(re.global, true);
print(re.ignoreCase, true);
