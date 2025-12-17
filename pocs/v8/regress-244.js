var kLegalPairs = [
  [0x00, '%00'],
  [0x01, '%01'],
  [0x7f, '%7F'],
  [0x80, '%C2%80'],
  [0x81, '%C2%81'],
  [0x7ff, '%DF%BF'],
  [0x800, '%E0%A0%80'],
  [0x801, '%E0%A0%81'],
  [0xd7ff, '%ED%9F%BF'],
  [0xffff, '%EF%BF%BF']
];

var kIllegalEncoded = [
  '%80', '%BF', '%80%BF', '%80%BF%80', '%C0%22', '%DF',
  '%EF%BF', '%F7BFBF', '%FE', '%FF', '%FE%FE%FF%FF',
  '%C0%AF', '%E0%9F%BF', '%F0%8F%BF%BF', '%C0%80',
  '%E0%80%80'
];

function run() {
  for (var i = 0; i < kLegalPairs.length; i++) {
    var decoded = String.fromCharCode(kLegalPairs[i][0]);
    var encoded = kLegalPairs[i][1];
    print(decodeURI(encoded), decoded);
    print(encodeURI(decoded), encoded);
  }
  for (var i = 0; i < kIllegalEncoded.length; i++) {
    var value = kIllegalEncoded[i];
    var exception = false;
    try {
      decodeURI(value);
    } catch (e) {
      exception = true;
      print(e, URIError);
    }
    print(exception);
  }
}

run();
