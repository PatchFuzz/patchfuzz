




function doTest(scripts, expectedError) {
  var realm = Realm.create();

  for (var i = 0; i < scripts.length - 1; i++) {
    Realm.eval(realm, scripts[i]);
  }
  assertThrows(function() {
    Realm.eval(realm, scripts[scripts.length - 1]);
  }, Realm.eval(realm, expectedError));

  Realm.dispose(realm);
}

var tests = [
  {
    
    
    
    scripts: [
      "var a;",
      "let a;",
    ],
    expectedError: "SyntaxError",
  },
  {
    
    
    
    scripts: [
      "let a;",
      "var a;",
    ],
    expectedError: "SyntaxError",
  },
  {
    
    
    
    scripts: [
      "let a;",
      "let a;",
    ],
    expectedError: "SyntaxError",
  },
  {
    
    
    
    scripts: [
      'let a; eval("var a;");',
    ],
    expectedError: "SyntaxError",
  },
  {
    
    
    
    scripts: [
      'let a; eval("function a() {}");',
    ],
    expectedError: "SyntaxError",
  },
  {
    
    
    scripts: [
      '(function() { let a; eval("var a;"); })();',
    ],
    expectedError: "SyntaxError",
  },
  {
    
    
    scripts: [
      '(function() { let a; eval("function a() {}"); })();',
    ],
    expectedError: "SyntaxError",
  },
  {
    
    
    scripts: [
      'let NaN;',
    ],
    expectedError: "SyntaxError",
  },
  {
    
    
    scripts: [
      'function NaN() {}',
    ],
    expectedError: "SyntaxError",
  },

  {
    
    
    scripts: [
      'eval("function NaN() {}");',
    ],
    expectedError: "TypeError",
  },
  {
    
    
    scripts: [
      `
        let a;
        try {
          eval("function a() {}");
        } catch (e) {}
        eval("function NaN() {}");
      `,
    ],
    expectedError: "TypeError",
  },
  {
    
    
    scripts: [
      `
        eval("
          function f() {
            function b() {
              (0, eval)('function NaN() {}');
            }
            b();
          }
          f();
        ");
      `.replace(/"/g, '`'),
    ],
    expectedError: "TypeError",
  },
];

tests.forEach(function(test) {
  doTest(test.scripts, test.expectedError);
});
