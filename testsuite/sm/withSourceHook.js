




load(libdir + 'asserts.js');

var log = '';


withSourceHook(function (url) {
  log += 'o';
  assertEq(url, 'outer');
  return '(function outer() { 3; })';
}, function () {
  log += 'O';
  
  assertThrowsValue(function () {
    
    withSourceHook(function (url) {
      log += 'm';
      assertEq(url, 'middle');
      throw 'borborygmus'; 
    }, function () {
      log += 'M';
      
      
      assertEq(withSourceHook(function (url) {
                                log += 'i';
                                assertEq(url, 'inner');
                                return '(function inner() { 1; })';
                              }, function () {
                                log += 'I';
                                return evaluate('(function inner() { 2; })',
                                                { fileName: 'inner', sourceIsLazy: true })
                                       .toString();
                              }),
               'function inner() { 1; }');
      
      evaluate('(function middle() { })',
               { fileName: 'middle', sourceIsLazy: true })
      .toString();
    });
  }, 'borborygmus');

  
  assertEq(evaluate('(function outer() { 4; })',
                    { fileName: 'outer', sourceIsLazy: true })
           .toString(),
           'function outer() { 3; }');
});

assertEq(log, 'OMIimo');
