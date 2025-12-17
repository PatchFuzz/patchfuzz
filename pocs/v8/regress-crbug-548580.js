function store(v) {
  var re = /(?=[d#.])/;
  re.a = v;
  return re;
}

var re1 = store(undefined);
var re2 = store(42);

print(re1.a, undefined);
print(re2.a, 42);
