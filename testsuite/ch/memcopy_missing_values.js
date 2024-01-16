





function func1() {
  for (var i = 3; i < ary.length; i++) {
    ary[i] = ary[i];
  }
}
var ary = Array(10).fill(0);
func1();
ary.length = 100;
ary.push(ary.shift());
func1();
func1();
print(ary);
