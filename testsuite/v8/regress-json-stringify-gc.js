


























var a = [];
var new_space_string = "a";
for (var i = 0; i < 8; i++) {
  new_space_string += new_space_string;
}
for (var i = 0; i < 10000; i++) a.push(new_space_string);




json1 = JSON.stringify(a);
json2 = JSON.stringify(a);
assertTrue(json1 == json2, "GC caused JSON.stringify to fail.");


for (var i = 0; i < 10000; i++) {
  var s = i.toString();
  assertEquals('"' + s + '"', JSON.stringify(s, null, 0));
}

for (var i = 0; i < 10000; i++) {
  var s = i.toString() + "\u2603";
  assertEquals('"' + s + '"', JSON.stringify(s, null, 0));
}
