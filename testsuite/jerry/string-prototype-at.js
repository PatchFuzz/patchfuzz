

var str = 'This is an Apple';


var index = str.at(0);
assert(index === 'T');
assert(str[index] === undefined);

assert(str.at(str.length) === undefined);
assert(str.at(str.length+1) === undefined);
assert(str.at(str.length-1) === 'e');
assert(str.at("1") === 'h');
assert(str.at(-1) === 'e');
assert(str.at("-1") === 'e');
assert(str.at("-20") === undefined);

try {
  String.prototype.at.call(undefined)
  assert (false);
} catch(e) {
  assert(e instanceof TypeError);
}

var obj = {toString: function() { return "Apple"; } };
obj.at = String.prototype.at;
assert(obj.at(0) === 'A');


assert(str.at("1n") === 'T')

try {
  str.at (10n);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}
