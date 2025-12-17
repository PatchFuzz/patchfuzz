var jsonstring = '{"0":0.1, "10000":0.4, ';
for (var i = 1; i < 9999; i++) {
  jsonstring += '"' + i + '":0.2, ';
}
jsonstring += '"9999":0.3}';

var jsonobject = JSON.parse(jsonstring);
for (var i = 1; i < 9999; i++) {
  print(0.2, jsonobject[i]);
}
