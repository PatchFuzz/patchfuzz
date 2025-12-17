;

var log = '';


withSourceHook(function (url) {
  log += 'o';
  print(url, 'outer');
  return '(function outer() { 3; })';
}, function () {
  log += 'O';
  
  print(function () {
    
    withSourceHook(function (url) {
      log += 'm';
      print(url, 'middle');
      throw 'borborygmus'; 
    }, function () {
      log += 'M';
      
      
      print(withSourceHook(function (url) {
                                log += 'i';
                                print(url, 'inner');
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

  
  print(evaluate('(function outer() { 4; })',
                    { fileName: 'outer', sourceIsLazy: true })
           .toString(),
           'function outer() { 3; }');
});

print(log, 'OMIimo');
