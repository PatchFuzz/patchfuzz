


























assertEquals(String.fromCharCode(97, 220, 256), 'a' + '\u00DC' + '\u0100');
assertEquals(String.fromCharCode(97, 220, 256), 'a\u00DC\u0100');

assertEquals(0x80, JSON.stringify("\x80").charCodeAt(1));
assertEquals(0x80, JSON.stringify("\x80", 0, null).charCodeAt(1));

assertEquals(['a', 'b', '\xdc'], ['b', '\xdc', 'a'].sort());

assertEquals(['\xfc\xdc', '\xfc'], new RegExp('(\xdc)\\1', 'i').exec('\xfc\xdc'));

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
  assertEquals( base_result, [base + base, base]);
  lo_result = new RegExp('(' + escaped + ')\\1', 'i').exec(base + lo);
  if (base.toLowerCase() == lo) {
    assertEquals([base + lo, base], lo_result);
    total_lo++;
  } else {
    assertEquals(null, lo_result);
  }
}


assertEquals((90-65+1)+(222-192-1+1), total_lo);


assertEquals( 1, +(String.fromCharCode(0xA0) + '1') );


assertEquals(["+\u00a3", "=="], "+\u00a3==".match(/\W\W/g));


assertTrue(/\u0178/i.test('\u00ff'));


assertTrue(/\u039c/i.test('\u00b5'));
assertTrue(/\u039c/i.test('\u03bc'));
assertTrue(/\u00b5/i.test('\u03bc'));

assertTrue(/[\u039b-\u039d]/i.test('\u00b5'));
assertFalse(/[^\u039b-\u039d]/i.test('\u00b5'));
assertFalse(/[\u039b-\u039d]/.test('\u00b5'));
assertTrue(/[^\u039b-\u039d]/.test('\u00b5'));


for (var testNumber = 0; testNumber < 2; testNumber++) {
  var testString = "\xdc";
  var loopLength = testNumber == 0 ? 0 : 20;
  for (var i = 0; i < loopLength; i++ ) {
    testString += testString;
  }
  var stringified = JSON.stringify({"test" : testString}, null, 0);
  var stringifiedExpected = '{"test":"' + testString + '"}';
  assertEquals(stringifiedExpected, stringified);
}
