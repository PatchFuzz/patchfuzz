evaluate("\
gcparam(\"maxBytes\", gcparam(\"gcBytes\") + 4 );\n\
test();\n\
function test() {\n\
  function flatten(arr)\n\
  { return actual = flatten([1, [2], 3]); }\
}\n\
");
try {} catch (lfVare) {}
