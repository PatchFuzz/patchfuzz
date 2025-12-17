function test0(){
  var obj1 = {};
  var strvar2 = 'nj'+'ax'+'io' + 'sj';
  var strvar4 = 'yi'+'fc'+'ne' + 'wh';
  with (obj1) {
    var strvar2 = strvar4;
  }
  strvar2 +=1;
  print("strvar2 = " + (strvar2));
  print("strvar4 = " + (strvar4));
};
test0();


var str = "Pas" + "sed";
function foo() {
  var x = "a" + "b";
  var y = str;
  x = y;
  var w = x + " NOT";
  use(w);
}
function use(x) {}
foo();
print(str);
