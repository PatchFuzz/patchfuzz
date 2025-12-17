function negativeStart() {
  var ta = new Int8Array(10);
  for (var i = 0; i < 100; ++i) {
    var start = -((i & 3) + 1);
    var r = ta.subarray(start);
    print(r.length, ta.length - (ta.length + start));
  }
}
negativeStart();

function negativeEnd() {
  var ta = new Int8Array(10);
  for (var i = 0; i < 100; ++i) {
    var end = -((i & 3) + 1);
    var r = ta.subarray(0, end);
    print(r.length, (ta.length + end));
  }
}
negativeEnd();
