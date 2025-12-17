;

var g = newGlobal({newCompartment: true});
g.debuggeeGlobal = this;
g.eval("(" + function () {
        var how, what;
        var dbg = new Debugger(debuggeeGlobal);
        dbg.onDebuggerStatement = function (frame) {
            if (frame.callee.name === "configure") {
                how = frame.arguments[0];
                what = frame.arguments[1];
            } else {
                var resume = {};
                resume[how] = what;
                return resume;
            }
        };
    } + ")();");

function configure(how, what) { debugger; }
function fire() { debugger; }

var d = new Date;
configure('return', d);
print(fire(), d);
configure('return', Math);
print(fire(), Math);

var x = new Error('oh no what are you doing');
configure('throw', x);
print(fire, x);
configure('throw', parseInt);
print(fire, parseInt);
