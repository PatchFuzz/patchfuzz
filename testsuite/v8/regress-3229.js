




function testEscapes(expected, regexp) {
  assertEquals(expected, regexp.source);
  assertEquals("/" + expected + "/", regexp.toString());
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
