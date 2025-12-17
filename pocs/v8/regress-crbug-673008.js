var a = {
  "33": true,
  "-1": true
};

var strkeys = Object.keys(a).map(function(k) { return "" + k });
var numkeys = Object.keys(a).map(function(k) { return +k });
var keys = strkeys.concat(numkeys);

keys.forEach(function(k) {
  print(a.hasOwnProperty(k),
             "property not found: " + k + "(" + (typeof k) + ")");
});

var b = {};
b.__proto__ = a;
keys.forEach(function(k) {
  print(k in b, "property not found: " + k + "(" + (typeof k) + ")");
});
