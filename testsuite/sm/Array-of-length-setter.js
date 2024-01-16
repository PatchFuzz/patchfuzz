

var hits = 0;
var lastObj = null, lastVal = undefined;
function setter(v) {
    hits++;
    lastObj = this;
    lastVal = v;
}


function Pack() {
    Object.defineProperty(this, "length", {set: setter});
}
Pack.of = Array.of;
var pack = Pack.of("wolves", "cards", "cigarettes", "lies");
assertEq(lastObj, pack);
assertEq(lastVal, 4);


function Bevy() {}
Object.defineProperty(Bevy.prototype, "length", {set: setter});
Bevy.of = Array.of;
var bevy = Bevy.of("quail");
assertEq(lastObj, bevy);
assertEq(lastVal, 1);
