print(String.fromCharCode(97, 220, 256), 'a' + '\u00DC' + '\u0100');
print(String.fromCharCode(97, 220, 256), 'a\u00DC\u0100');

print(0x80, JSON.stringify("\x80").charCodeAt(1));
print(0x80, JSON.stringify("\x80", 0, null).charCodeAt(1));

print(['a', 'b', '\xdc'], ['b', '\xdc', 'a'].sort());

print(['\xfc\xdc', '\xfc'], new RegExp('(\xdc)\\1', 'i').exec('\xfc\xdc'));

var total_lo = 0;
for (var i = 0; i < 0xff; i++) {
  var base = String.fromCharCode(i);
  var escaped = base;
  if (base == '(' || base == ')' || base == '*' || base == '+' ||
      base == '?' || base == '[' || base == ']' || base == '\\' ||
      base == '$' || base == '^' || base == '|') {
    escaped = '\\' + base;
  }
  var lo = String.fromCharCode(i + 0x20);
  base_result = new RegExp('(' + escaped + ')\\1', 'i').exec(base + base);
  print( base_result, [base + base, base]);
  lo_result = new RegExp('(' + escaped + ')\\1', 'i').exec(base + lo);
  if (base.toLowerCase() == lo) {
    print([base + lo, base], lo_result);
    total_lo++;
  } else {
    print(null, lo_result);
  }
}


print((90-65+1)+(222-192-1+1), total_lo);


print( 1, +(String.fromCharCode(0xA0) + '1') );


print(["+\u00a3", "=="], "+\u00a3==".match(/\W\W/g));


print(/\u0178/i.test('\u00ff'));


print(/\u039c/i.test('\u00b5'));
print(/\u039c/i.test('\u03bc'));
print(/\u00b5/i.test('\u03bc'));

print(/[\u039b-\u039d]/i.test('\u00b5'));
print(/[^\u039b-\u039d]/i.test('\u00b5'));
print(/[\u039b-\u039d]/.test('\u00b5'));
print(/[^\u039b-\u039d]/.test('\u00b5'));


for (var testNumber = 0; testNumber < 2; testNumber++) {
  var testString = "\xdc";
  var loopLength = testNumber == 0 ? 0 : 20;
  for (var i = 0; i < loopLength; i++ ) {
    testString += testString;
  }
  var stringified = JSON.stringify({"test" : testString}, null, 0);
  var stringifiedExpected = '{"test":"' + testString + '"}';
  print(stringifiedExpected, stringified);
}
