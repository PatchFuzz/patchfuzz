





const str = '2016-01-02';

function t() {
  var re;
  function toDictMode() {
    for (var i = 0; i < 100; i++) {  
      re.x = 42;
      delete re.x;
    }
    return 0;
  }

  re = /-/g;  
  re.lastIndex = { valueOf : toDictMode };
  return re.exec(str);
}

for (var q = 0; q < 10000; q++) {
  t();  
}
