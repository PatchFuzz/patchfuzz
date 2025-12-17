(function TestIdentityEscapes() {
  
  var r0 = /\u/;
  print(r0.test("u"));

  r0 = RegExp("\\u");
  print(r0.test("u"));

  var r1 = /\usecond/;
  print(r1.test("usecond"));

  r1 = RegExp("\\usecond");
  print(r1.test("usecond"));

  var r2 = /first\u/;
  print(r2.test("firstu"));
  
  print(r2.test("first\\u"));

  r2 = RegExp("first\\u");
  print(r2.test("firstu"));
  
  print(r2.test("first\\u"));

  var r3 = /first\usecond/;
  print(r3.test("firstusecond"));
  print(r3.test("first\\usecond"));

  r3 = RegExp("first\\usecond");
  print(r3.test("firstusecond"));
  print(r3.test("first\\usecond"));

  var r4 = /first\u123second/;
  print(r4.test("firstu123second"));
  print(r4.test("first\\u123second"));

  r4 = RegExp("first\\u123second");
  print(r4.test("firstu123second"));
  print(r4.test("first\\u123second"));

  
  
  var r5 = /\a/;
  print(r5.test("a"));

  r5 = RegExp("\\a");
  print(r5.test("a"));

  var r6 = /\asecond/;
  print(r6.test("asecond"));

  r6 = RegExp("\\asecond");
  print(r6.test("asecond"));

  var r7 = /first\a/;
  print(r7.test("firsta"));
  print(r7.test("first\\a"));

  r7 = RegExp("first\\a");
  print(r7.test("firsta"));
  print(r7.test("first\\a"));

  var r8 = /first\asecond/;
  print(r8.test("firstasecond"));
  print(r8.test("first\\asecond"));

  r8 = RegExp("first\\asecond");
  print(r8.test("firstasecond"));
  print(r8.test("first\\asecond"));
})();
