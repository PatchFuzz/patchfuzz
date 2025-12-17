(function () {
  var strNum = 170;
  var base = strNum / 16;
  var rem = strNum % 16;
  var base = base - (rem / 16);  

  switch(base) {
    case 10: return "A";  
    case 11: return "B";
    case 12: return "C";
    case 13: return "D";
    case 14: return "E";
    case 15: return "F";  
  };
  fail("case 10", "Default case", "Heap number not recognized as Smi value");
})();
