

var patterns = new Array(); 
patterns[0] = '';
test();
function test() {
  for (i in patterns) {
    s = patterns[i];
    status =(test)(s);  
  }
}
