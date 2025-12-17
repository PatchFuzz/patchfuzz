table = [];

for (var i = 0; i < 32; i++) {
 table[i] = String.fromCharCode(i + 0x410);
}


var random = (function() {
  var seed = 10;
  return function() {
    seed = (seed * 1009) % 8831;
    return seed;
  };
})();


function key(length) {
  var s = "";
  for (var i = 0; i < length; i++) {
    s += table[random() % 32];
  }
  return '"' + s + '"';
}


function value() {
  return '[{' + '"field1" : ' + random() + ', "field2" : ' + random() + '}]';
}


function generate(n) {
  var s = '{';
  for (var i = 0; i < n; i++) {
     if (i > 0) s += ', ';
     s += key(random() % 10 + 7);
     s += ':';
     s += value();
  }
  s += '}';
  return s;
}


print("generating");

var str = generate(10000);

print("parsing "  + str.length);
JSON.parse(str);

print("done");
