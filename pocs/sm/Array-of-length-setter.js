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
print(lastObj, pack);
print(lastVal, 4);


function Bevy() {}
Object.defineProperty(Bevy.prototype, "length", {set: setter});
Bevy.of = Array.of;
var bevy = Bevy.of("quail");
print(lastObj, bevy);
print(lastVal, 1);
