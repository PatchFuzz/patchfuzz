













var once = false;
var m = 1;

function JSEtest(){
  if(!once){
    m = new Array(1, 2, 3);
    this[2] = m;
  }
  once = true;
  return this[2] = m;
}

try {
  JSON.parse("[1, 2, [4, 5]]", JSEtest);
  print(false);
} catch (e){
  print(e instanceof RangeError);
}
