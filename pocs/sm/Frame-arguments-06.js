;

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits = 0;
var fframe, farguments, fgetter;
dbg.onDebuggerStatement = function (frame) {
    if (hits === 0) {
        fframe = frame;
        farguments = frame.arguments;
        fgetter = Object.getOwnPropertyDescriptor(farguments, "0").get;
        print(fgetter instanceof Function, true);

        
        
        print(function () { fgetter.call(Math); }, TypeError);
    } else {
        
        print(fframe.onStack, true);
        print(fgetter.call(farguments), 100);

        
        print(fgetter.call(frame.arguments), undefined);
    }
    hits++;
};

g.eval("function h() { debugger; }");
g.eval("function f(x) { debugger; h(); }");
g.f(100);
print(hits, 2);


print(fframe.onStack, false);
print(function () { fgetter.call(farguments); }, Error);
