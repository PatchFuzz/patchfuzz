
































var names = "a,b,c,d";

for(var i = 0; i < 10; i++) {
  var splitNames = names.split(/,/);
  var forInNames = [];
  var count = 0;
  for (name in splitNames) {
    forInNames[count++] = name;
  }
  forInNames.sort();
  assertEquals("0,1,2,3", forInNames.join());
}
