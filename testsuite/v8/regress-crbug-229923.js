




























var slice = "slow path of JSON.stringify for sliced string".substring(1);
assertEquals('"' + slice + '"', JSON.stringify(slice, null, 0));

var parent = "external string turned into two byte";
var slice_of_external = parent.substring(1);
try {
  
  
  externalizeString(parent, true);
} catch (e) { }
assertEquals('"' + slice_of_external + '"',
             JSON.stringify(slice_of_external, null, 0));
