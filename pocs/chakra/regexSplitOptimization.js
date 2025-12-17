function test0(){
var s = "aabbcc";
var r = new RegExp(/b/);
r.lastIndex = 15;
s.split(r);
print(r.lastIndex !== 15 ? "Pass" : ("Fail actual value: " + r.lastIndex));
}
test0();
test0();
