var re = /(B)/;
var cons1 = "0123456789" + "ABCDEFGHIJ";
var cons2 = "0123456789\u1234" + "ABCDEFGHIJ";
gc();
gc();  

externalizeString(cons1);
externalizeString(cons2);

var slice1 = cons1.slice(1,-1);
var slice2 = cons2.slice(1,-1);
for (var i = 0; i < 10; i++) {
  print(["B", "B"], re.exec(slice1));
  print(["B", "B"], re.exec(slice2));
}
