function testEscapes(expected, regexp) {
  print(expected, regexp.source);
  print("/" + expected + "/", regexp.toString());
}

testEscapes("\\/", /\
testEscapes("\\/\\/", /\/\
testEscapes("\\/", new RegExp("/"));
testEscapes("\\/", new RegExp("\\/"));
testEscapes("\\\\\\/", new RegExp("\\\\/"));
testEscapes("\\/\\/", new RegExp("\\/\\/"));
testEscapes("\\/\\/\\/\\/", new RegExp("
testEscapes("\\/\\/\\/\\/", new RegExp("\\
testEscapes("(?:)", new RegExp(""));


var r = /\/\
testEscapes("\\/\\/", r);
r.source = "garbage";
testEscapes("\\/\\/", r);
