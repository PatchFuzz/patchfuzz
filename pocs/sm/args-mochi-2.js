actual = '';
expected = 'true,';

var isNotEmpty = function (args, i) {
  var o = args[i];
  if (!(o && o.length)) {
    return false;
  }
  return true;
};

var f = function(obj) {
  for (var i = 0; i < arguments.length; i++) {
    if (!isNotEmpty(arguments, i))
      return false;
  }
  return true;
}

print(f([1], [1], [1], "asdf", [1]));


print(actual, expected)
