



(function TestIdentityEscapes() {
  
  var r0 = /\u/;
  assertTrue(r0.test("u"));

  r0 = RegExp("\\u");
  assertTrue(r0.test("u"));

  var r1 = /\usecond/;
  assertTrue(r1.test("usecond"));

  r1 = RegExp("\\usecond");
  assertTrue(r1.test("usecond"));

  var r2 = /first\u/;
  assertTrue(r2.test("firstu"));
  
  assertFalse(r2.test("first\\u"));

  r2 = RegExp("first\\u");
  assertTrue(r2.test("firstu"));
  
  assertFalse(r2.test("first\\u"));

  var r3 = /first\usecond/;
  assertTrue(r3.test("firstusecond"));
  assertFalse(r3.test("first\\usecond"));

  r3 = RegExp("first\\usecond");
  assertTrue(r3.test("firstusecond"));
  assertFalse(r3.test("first\\usecond"));

  var r4 = /first\u123second/;
  assertTrue(r4.test("firstu123second"));
  assertFalse(r4.test("first\\u123second"));

  r4 = RegExp("first\\u123second");
  assertTrue(r4.test("firstu123second"));
  assertFalse(r4.test("first\\u123second"));

  
  
  var r5 = /\a/;
  assertTrue(r5.test("a"));

  r5 = RegExp("\\a");
  assertTrue(r5.test("a"));

  var r6 = /\asecond/;
  assertTrue(r6.test("asecond"));

  r6 = RegExp("\\asecond");
  assertTrue(r6.test("asecond"));

  var r7 = /first\a/;
  assertTrue(r7.test("firsta"));
  assertFalse(r7.test("first\\a"));

  r7 = RegExp("first\\a");
  assertTrue(r7.test("firsta"));
  assertFalse(r7.test("first\\a"));

  var r8 = /first\asecond/;
  assertTrue(r8.test("firstasecond"));
  assertFalse(r8.test("first\\asecond"));

  r8 = RegExp("first\\asecond");
  assertTrue(r8.test("firstasecond"));
  assertFalse(r8.test("first\\asecond"));
})();
