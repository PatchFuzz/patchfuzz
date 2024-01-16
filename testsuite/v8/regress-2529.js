





























function makeScript(s) {
  return 'while(true) { try { "try"; break } finally { "finally" }; ' + s + ' }';
}

var s1 = makeScript('');
var s2 = makeScript('y = "done"');
var s3 = makeScript('if (true) 2; else var x = 3;');
var s4 = makeScript('if (true) 2; else 3;');

assertEquals("try", eval(s1));
assertEquals("try", eval(s2));
assertEquals("try", eval(s3));
assertEquals("try", eval(s4));
