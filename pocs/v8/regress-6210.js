const str = '2016-01-02';

function testToUint32InSplit() {
  var re;
  function toDictMode() {
    re.x = 42;
    delete re.x;
    return "def";
  }

  re = /./g;  
  return re[Symbol.replace]("abc", { valueOf: toDictMode });
}

function testToStringInReplace() {
  var re;
  function toDictMode() {
    re.x = 42;
    delete re.x;
    return 42;
  }

  re = /./g;  
  return re[Symbol.split]("abc", { valueOf: toDictMode });
}

testToUint32InSplit();
testToStringInReplace();
