function makeScript(s) {
  return 'while(true) { try { "try"; break } finally { "finally" }; ' + s + ' }';
}

var s1 = makeScript('');
var s2 = makeScript('y = "done"');
var s3 = makeScript('if (true) 2; else var x = 3;');
var s4 = makeScript('if (true) 2; else 3;');

print("try", eval(s1));
print("try", eval(s2));
print("try", eval(s3));
print("try", eval(s4));
