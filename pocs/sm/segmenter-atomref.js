function test(granularity, s0, s1) {
  var str = newString("Lorem ipsum. Dolor sit.", {twoByte: true});
  var segments = new Intl.Segmenter("en", {granularity}).segment(str);
  print(segments.containing(0).segment, s0);
  var obj = {[str]: 1}; 
  print(segments.containing(0).segment, s0);
  print(segments.containing(13).segment, s1);
  return obj;
}
test("grapheme", "L", "D");
test("word", "Lorem", "Dolor");
test("sentence", "Lorem ipsum. ", "Dolor sit.");
